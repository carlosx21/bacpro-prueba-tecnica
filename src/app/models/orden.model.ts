export class Orden {

    public id: number;
    public cantidad: number;
    public fecha: Date;
    public idProducto:string;
    public idCliente:string;

    constructor(id:number , cantidad: number , fecha: Date,
                  idProducto: string , idCliente: string ){

       this.id = id;
       this.cantidad = cantidad;
       this.fecha = fecha;
       this.idProducto= idProducto;
       this.idCliente = idCliente;
                
    }

    

  }
  