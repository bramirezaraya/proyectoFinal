import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Route} from "@angular/router";
import {Artistas} from '../interfaces/artistas'
import { ArtistasService } from '../services/artistas.service';

@Component({
  selector: 'app-informacion-artistas',
  templateUrl: './informacion-artistas.component.html',
  styleUrls: ['./informacion-artistas.component.scss']
})
export class InformacionArtistasComponent implements OnInit {

  listaArtistas = new Array<Artistas>();
  id:number = 0;
  artistas:any;
  constructor(private ruta:ActivatedRoute, private http:ArtistasService) {
    this.ruta.params.subscribe(datos=> {
    this.id=datos["id"];
    })
  }

  ngOnInit(): void {

    this.http.GetPostgres().subscribe(dato=>{
      
      for(let i=0; i<dato.items.length; i++){      
        if(i+1 == this.id)
        {
          this.listaArtistas.push(dato.items[i]);
        }
      }
      console.log(this.listaArtistas)
    })
  }
}
