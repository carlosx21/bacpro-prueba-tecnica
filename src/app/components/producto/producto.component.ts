import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/producto.model';
import { ApiExampleService } from 'src/app/services/api-example.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private apiService: ApiExampleService) { }

  dataSource = new MatTableDataSource<Producto>();

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio' , 'ver'];

  ngOnInit(): void {
     // Se cargan todos los productos disponibles 
     this.apiService.getProductos()
     .subscribe(resp => {
         console.log(resp);
         this.dataSource.data = resp;
     });
  }

}
