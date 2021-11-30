import { Component, OnInit } from '@angular/core';

import {Artistas} from '../interfaces/artistas'
import { ArtistasService } from '../services/artistas.service';

@Component({
  selector: 'app-artistas-ii',
  templateUrl: './artistas-ii.component.html',
  styleUrls: ['./artistas-ii.component.scss']
})
export class ArtistasIiComponent implements OnInit {

  
  listaArtistas = new Array<Artistas>();

  constructor(private http:ArtistasService){}

  ngOnInit(): void {

    this.http.GetPostgres().subscribe(dato=>{
      
      for(let i=0; i<dato.items.length; i++){
        this.listaArtistas.push(dato.items[i]);
      }
    });
  }
}
