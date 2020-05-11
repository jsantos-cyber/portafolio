import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-Pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info:InfoPagina={};
  cargada=false;
  equipo:any[]=[];

  constructor(private http:HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
   }

private cargarInfo(){
  console.info('servicio de infopagina Listo')
  this.http.get('assets/data/data-pagina.json')
  .subscribe((resp: InfoPagina)=>{
   // console.log(resp);
   this.cargada=true;
   this.info=resp;
   //console.log(resp.twitter);
    //console.log(resp['email']);
    //console.log(resp['titulo']);
  });
}

private cargarEquipo(){
  console.info('servicio de infopagina Listo')
  this.http.get('https://angular-html-861a9.firebaseio.com/equipo.json')
  .subscribe((resp:any[])=>{
   this.cargada=true;
   this.equipo=resp;
  // console.log(this.equipo);
  });
}


  }
