import { Pipe, PipeTransform } from '@angular/core';
import { ApiExampleService } from '../services/api-example.service';

@Pipe({
  name: 'myCustom',
  pure: false
})
export class MyCustomPipe implements PipeTransform {

  
    prevalue: string = null;
    result: string = '';

  constructor(private apiserv:ApiExampleService){}

  transform(value: any, ...args: unknown[]): any {

    if (value !== this.prevalue) {
      this.prevalue = value;
      this.result = '';
      if (args[0] === 'p') {
        this.apiserv.getProducto(Number(value.toString())).subscribe(response => {
          this.result = response.nombre;
        });
      }
      if (args[0] === 'c') {
        this.apiserv.getCliente(Number(value.toString())).subscribe(response => {
          this.result = response.nombres + ' ' + response.apellidos;
        });
      }
   }
    return this.result;
   
  }

}
