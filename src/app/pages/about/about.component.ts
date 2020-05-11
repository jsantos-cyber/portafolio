import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
//para usar el servicio hay que inyectarlo
  constructor(public infoService:InfoPaginaService) { 
    
  }

  ngOnInit(): void {
  }

}
