import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ApiExampleService } from 'src/app/services/api-example.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.scss']
})
export class VerProductoComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute ,
              private apiService: ApiExampleService) { }

  public producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      console.log(params['id']);
        this.apiService.getProducto(params['id'])
          .subscribe(resp => {
              console.log(resp);       
              this.producto = resp;     
        });
    })
  }

}
