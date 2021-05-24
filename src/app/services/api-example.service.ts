import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Orden } from '../models/orden.model';
import { Producto } from '../models/producto.model';
import { map, delay } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiExampleService {

  constructor(private http: HttpClient) { }

   // Url de la API 
   private url = 'http://localhost:3000';

   // Seccion de metodos de Cliente-----------------------------------------
   getClientes() {
    return this.http.get<Cliente[]>(`${this.url}/clientes`);
   }

   getCliente(id: number) {
    return this.http.get<Cliente>(`${this.url}/clientes/${id}`);
   }

   addCliente( cliente: Cliente){
    return this.http.post<Cliente>(`${this.url}/clientes` , 
      cliente
    );
   }

   // Seccion de metodos de Producto --------------------------------------
   getProductos() {
    return this.http.get<Producto[]>(`${this.url}/productos`);
   }

   getProducto(id: number) {
    return this.http.get<Producto>(`${this.url}/productos/${id}`);
   }

   addProducto( producto: Producto){
    return this.http.post<Producto>(`${this.url}/productos` , 
      producto
    );
   }

   // Seccion de metodos de Orden -------------------------------------------

   getOrdenes() {
    return this.http.get<Orden[]>(`${this.url}/ordenes`);
   }

   getOrden(id: number) {
    return this.http.get<Orden>(`${this.url}/ordenes/${id}`);
   }

   addOrden( orden: Orden){
    return this.http.post<Orden>(`${this.url}/ordenes` , 
      orden
    );
   }

   
}


