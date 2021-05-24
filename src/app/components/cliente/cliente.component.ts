import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ApiExampleService } from 'src/app/services/api-example.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  
  dataSource = new MatTableDataSource<Cliente>();

  displayedColumns: string[] = ['id', 'nombres', 'apellidos', 'telefono' , 'correo' , 'nit' , 'ver'];

  constructor(private apiService: ApiExampleService) { }

  ngOnInit(): void {

    // Se cargan todos los clientes disponibles 
    this.apiService.getClientes()
    .subscribe(resp => {
        console.log(resp);
        this.dataSource.data = resp;
    });
  }

}
