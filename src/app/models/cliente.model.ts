export class Cliente {

    public id: number;
    public nombres: string;
    public apellidos: string;
    public telefono:string;
    public correo:string;
    public nit: string;

    constructor(id:number , nombres: string , apellidos: string,
              telefono: string , correo: string , nit: string){

       this.id = id;
       this.nombres = nombres;
       this.apellidos = apellidos;
       this.telefono= telefono;
       this.correo = correo;
       this.nit = nit;
                
    }
   
  }