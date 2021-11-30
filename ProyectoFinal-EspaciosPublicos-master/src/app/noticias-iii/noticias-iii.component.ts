import { Component, OnInit } from '@angular/core';

import { ArtistasService } from '../services/artistas.service';
import { Noticias } from '../interfaces/noticias';

@Component({
  selector: 'app-noticias-iii',
  templateUrl: './noticias-iii.component.html',
  styleUrls: ['./noticias-iii.component.scss']
})
export class NoticiasIiiComponent implements OnInit {

  listaNoticias = new Array<Noticias>();

  constructor(private http:ArtistasService){}

  ngOnInit(): void {

    this.http.GetPostgres2().subscribe(dato=>{
      
      for(let i=0; i<dato.items.length; i++){
        this.listaNoticias.push(dato.items[i]);
      }
    });
  }
}
