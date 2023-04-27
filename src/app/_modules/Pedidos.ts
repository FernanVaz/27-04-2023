export class pedidos{
  idPedido:number;
  idCliente:number;
  formaPago:string;
  direccionEntrega:string
  static idp:number=0
  constructor(idc:number,fp:string,dE:string){
    pedidos.idp++
    this.idPedido=pedidos.idp
    this.idCliente=idc
    this.formaPago=fp
    this.direccionEntrega=dE
  }
  agregarAlumno() {

  }

}
