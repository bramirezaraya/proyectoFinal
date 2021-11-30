import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    (mapboxgl as any).accessToken = environment.maptokenkey;
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    attributionControl: false,
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });
    
  }
    title = 'EspaciosPublicos';
  }
