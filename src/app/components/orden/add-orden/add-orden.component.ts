import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageCustom } from 'src/app/interfaces/message.interface';
import { Orden } from 'src/app/models/orden.model';
import { ApiExampleService } from 'src/app/services/api-example.service';
import { SharedService } from 'src/app/services/shared.service';
import { CustomDialogComponent } from '../../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-add-orden',
  templateUrl: './add-orden.component.html',
  styleUrls: ['./add-orden.component.scss']
})
export class AddOrdenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,
              private apiService: ApiExampleService,
              public dialog: MatDialog ,
              public sharServ:SharedService,
              public route: Router ) { }

              
  formGroup: FormGroup;
  // next id  para la entidad
  nextID= 0;

  lstClientes: any[] = [];
  lstProductos: any[] = [];

  
  ngOnInit(): void {
    this.apiService.getOrdenes()
          .subscribe(resp => {
              let mx = Math.max(...resp.map(function(o){return o.id;}))
              this.nextID = mx + 1;   
        });

        this.apiService.getClientes()
        .subscribe(resp => {
            
            resp.forEach(cliente => {
                let obj = {
                  value : cliente.id,
                  viewValue: cliente.nombres + ' ' + cliente.apellidos
                };
                this.lstClientes.push(obj);
            });
        });  

        this.apiService.getProductos()
        .subscribe(resp => {
             
            resp.forEach(producto => {
              let obj = {
                value : producto.id,
                viewValue: producto.nombre
              };
              this.lstProductos.push(obj);
          });         
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
    this.formGroup = this.formBuilder.group({
      'cantidad': [null, Validators.required ],
      'fecha': [null, Validators.required],
      'idProducto': [null, Validators.required],
      'idCliente': [null, Validators.required],
      'validate': ''
    });
  }

  onSubmit(form:any) {
   
    let orden: Orden = {
      id: this.nextID,
      idProducto: form['idProducto'].toString(),
      idCliente: form['idCliente'].toString(),
      cantidad: Number(form['cantidad']),
      fecha: form['fecha']
    }

    let msg: MessageCustom = {
      title: 'Agregar Orden',
      content: 'Se agrego Orden !!!'
    }
  
    this.apiService.addOrden(orden)
          .subscribe(resp => {
            this.dialog.open(CustomDialogComponent);
            this.sharServ.msgCustom.emit(msg);
            this.route.navigateByUrl('mi-tienda/ordenes');
        });
  }

}
