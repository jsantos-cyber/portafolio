import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-Pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info:InfoPagina={};
  cargada=false;

  constructor(private http:HttpClient) {
    console.info('servicio de infopagina Listo')
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina)=>{
     // console.log(resp);
     this.cargada=true;
     this.info=resp;
     //console.log(resp.twitter);
      //console.log(resp['email']);
      //console.log(resp['titulo']);
    })

   }
}
