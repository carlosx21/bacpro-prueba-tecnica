import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ApiExampleService } from 'src/app/services/api-example.service';


@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.scss']
})
export class VerClienteComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute ,
              private apiService: ApiExampleService ) { }

  public cliente : Cliente  = {
    id:0 ,
    nombres: '',
    apellidos: '',
    correo: '',
    nit: '',
    telefono: ''     
  };
              
  ngOnInit(): void {

    this.actRoute.params.subscribe(params => {
      console.log(params['id']);
        this.apiService.getCliente(params['id'])
          .subscribe(resp => {
              console.log(resp);   
              this.cliente = resp;         
        });
    })
  }

}
