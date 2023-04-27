import { Injectable } from '@angular/core';
import { pedidos } from './_modules/Pedidos';
import { productos } from './_modules/Productos';
import {Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }

  pedidos:pedidos[]=[]

  productos:productos[]=[]

  productosAUX:productos[]=[]
  agregarProductos(nuevoProducto:productos){
    this.productosAUX.push(nuevoProducto)
  }
  agregarPedido(nuevoPedido:pedidos){
    this.pedidos.push(nuevoPedido)
    for(let i = 0;i<=this.productosAUX.length-1;i++){
      this.productos.push(this.productosAUX[i])
    }
    this.productosAUX.splice(0,this.productosAUX.length)
  }
  getPedidos():Observable<pedidos[]>{
    return of(this.pedidos)
  }
  getProductos():Observable<productos[]>{
    return of(this.productos)
  }
  getProductosAux():Observable<productos[]>{
    return of(this.productosAUX)
  }
  eliminarDeCarritos(n:number){
    let dato = this.productosAUX.findIndex((productosAUX) => productosAUX.idProducto=== n)
    if(dato!==-1){
    this.productosAUX.splice(dato, 1)
    }

  }
}

