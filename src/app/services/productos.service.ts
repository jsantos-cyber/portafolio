import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
    
  cargando=true;
  productos:Producto[]=[];
  productoFiltrado:Producto[]=[];
  
  constructor(private http:HttpClient) {
      this.cargarProductos();
  }

  private cargarProductos(){
//promesas asincrono
    return new Promise((resolve,reject)=>{
          this.http.get('https://angular-html-861a9.firebaseio.com/productos_idx.json')
          .subscribe((resp:Producto[])=>{
                //console.log(resp);
        this.productos=resp;
        // setTimeout(() => {
        this.cargando=false;
        resolve();
        // }, 2000);
        });
    });  
  }

  getProducto(id:string){
  return this.http.get(`https://angular-html-861a9.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){
    //barremos el arreglo y me trae un nuevo 
    if(this.productos.length===0){
      //cargarProductos
      this.cargarProductos().then(()=>{
        //se ejecuta despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    }else{
//aplicar filtro
        this.filtrarProductos(termino);
    }

    //this.productosFiltrado= this.productos.filter(producto=>{
    //   return true;
    // });
  
  
  }
private filtrarProductos(termino:string){
//  console.log(this.productos);
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod=>{
        const tituloLower=prod.titulo.toLocaleLowerCase();
      
        if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
          this.productoFiltrado.push(prod);
        }
    });
}

}
