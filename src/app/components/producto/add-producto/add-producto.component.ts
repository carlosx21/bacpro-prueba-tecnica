import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageCustom } from 'src/app/interfaces/message.interface';
import { Producto } from 'src/app/models/producto.model';
import { ApiExampleService } from 'src/app/services/api-example.service';
import { SharedService } from 'src/app/services/shared.service';
import { CustomDialogComponent } from '../../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss']
})
export class AddProductoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,
              private apiService: ApiExampleService,
              public dialog: MatDialog ,
              public sharServ:SharedService,
              public route: Router ) { }

   
   formGroup: FormGroup;
  // next id  para la entidad
  nextID= 0;

  ngOnInit(): void {
      this.apiService.getProductos()
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
    this.formGroup = this.formBuilder.group({
      'nombre': [null, Validators.required ],
      'descripcion': [null, Validators.required],
      'precio': [null, Validators.required],
      'validate': ''
    });
  }

  onSubmit(form:any) {
    let producto: Producto = {
      id: this.nextID,
      nombre: form['nombre'],
      descripcion: form['descripcion'],
      precio: form['precio']
    }

    let msg: MessageCustom = {
      title: 'Agregar Producto',
      content: 'Se agrego producto !!!'
    }
    
    this.apiService.addProducto(producto)
          .subscribe(resp => {
            this.dialog.open(CustomDialogComponent);
            this.sharServ.msgCustom.emit(msg);
            this.route.navigateByUrl('mi-tienda/productos');
        });
  }

}
