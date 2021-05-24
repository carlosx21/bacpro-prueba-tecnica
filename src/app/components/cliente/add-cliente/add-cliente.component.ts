import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageCustom } from 'src/app/interfaces/message.interface';
import { Cliente } from 'src/app/models/cliente.model';
import { ApiExampleService } from 'src/app/services/api-example.service';
import { SharedService } from 'src/app/services/shared.service';
import { CustomDialogComponent } from '../../custom-dialog/custom-dialog.component';


@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})
export class AddClienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,
              private apiService: ApiExampleService,
              public dialog: MatDialog ,
              public sharServ:SharedService,
              public route: Router) { 
    
  }

  formGroup: FormGroup;
  // next id  para la entidad
  nextID= 0;


  ngOnInit(): void {
    
    this.apiService.getClientes()
          .subscribe(resp => {
              let mx = Math.max(...resp.map(function(o){return o.id;}))
              this.nextID = mx + 1;   
        });

    this.createForm();
    this.onValueChanges();
  }

  onValueChanges(): void {
    this.formGroup.valueChanges.subscribe(val=>{
      console.log(val);
    })
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let phoneregex: RegExp = /^\d{4}-\d{4}$/;
    let nitregex: RegExp = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
    this.formGroup = this.formBuilder.group({
      'nombres': [null, Validators.required ],
      'apellidos': [null, Validators.required],
      'correo': [null, [Validators.required, Validators.pattern(emailregex)]],
      'telefono': [null, [Validators.required, Validators.pattern(phoneregex)]],
      'nit': [null, [Validators.required, Validators.pattern(nitregex)]],
      'validate': ''
    });
  }

  getErrorEmail() {
    return this.formGroup.get('correo').hasError('required') ? 'Correo es requerido' :
      this.formGroup.get('correo').hasError('pattern') ? 'No es un correo valido , example = example@mail.com' :
       '';
  }


  onSubmit(form:any) {
    let cliente: Cliente = {
      id: this.nextID,
      nombres: form['nombres'],
      apellidos: form['apellidos'],
      correo: form['correo'],
      nit: form['nit'],
      telefono: form['telefono']
    }

    let msg: MessageCustom = {
      title: 'Agregar Cliente',
      content: 'Se agrego cliente !!!'
    }
             
    this.apiService.addCliente(cliente)
          .subscribe(resp => {
             this.dialog.open(CustomDialogComponent);
             this.sharServ.msgCustom.emit(msg);
             this.route.navigateByUrl('mi-tienda/clientes');
        });
  }

}
