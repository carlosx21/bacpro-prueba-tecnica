import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { Cliente } from 'src/app/models/cliente.model';
import { Orden } from 'src/app/models/orden.model';
import { Producto } from 'src/app/models/producto.model';
import { ApiExampleService } from 'src/app/services/api-example.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent implements OnInit {

  constructor(private apiService: ApiExampleService) { }

  dataSource = new MatTableDataSource<Orden>();

  displayedColumns: string[] = ['id', 'cantidad', 'idProducto' ,'idCliente', 'fecha', 'ver'];

  ngOnInit(): void {

     // Se cargan todos los ordenes disponibles 
     this.apiService.getOrdenes()
     .subscribe(resp => {
         console.log(resp);
         this.dataSource.data = this.crearArrayOrden(resp);
     });
  }

  private crearArrayOrden(lstOrdenes: Orden[]) {

    const lstOrden: Orden[] = [];
   
    lstOrdenes.forEach((key: Orden) => {
    
      const response1 = this.apiService.getCliente(Number(key.idCliente)) ;
      const response2 = this.apiService.getProducto(Number(key.idProducto)) ;

      forkJoin([response1, response2]).subscribe( res =>{
          
           let res1: Cliente = res[0];
           let res2: Producto = res[1];
           key.idCliente = res1.nombres + ' '+ res1.apellidos; 
           key.idProducto = res2.nombre;
       } 
      )
       
      lstOrden.push(key);
     
    });

    return lstOrden;

  }

}
