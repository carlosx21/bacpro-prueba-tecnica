import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orden } from 'src/app/models/orden.model';
import { ApiExampleService } from 'src/app/services/api-example.service';

@Component({
  selector: 'app-ver-orden',
  templateUrl: './ver-orden.component.html',
  styleUrls: ['./ver-orden.component.scss']
})
export class VerOrdenComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute ,
              private apiService: ApiExampleService ) { }


  public orden: Orden = {
    id: 0,
    cantidad: 0,
    fecha: new Date(),
    idCliente:'0',
    idProducto: '0'
  }            

  ngOnInit(): void {

    this.actRoute.params.subscribe(params => {
      console.log(params['id']);
        this.apiService.getOrden(params['id'])
          .subscribe(resp => {
              console.log(resp);               
              this.orden =resp ;         
        });
    })
  }

}
