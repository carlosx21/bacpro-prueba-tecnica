export class Producto {

    public id: number;
    public nombre: string;
    public descripcion: string;
    public precio:number;
 

    constructor(id:number , nombre: string , descripcion: string,
                precio: number ){

       this.id = id;
       this.nombre = nombre;
       this.descripcion = descripcion;
       this.precio= precio;

                
    }

  }