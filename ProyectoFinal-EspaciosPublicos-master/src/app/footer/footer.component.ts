import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  
  mapa: Mapboxgl.Map | undefined;

  title = 'mapboxgl';
  constructor() {}

  ngOnInit(): void {

    function flyToStore(currentFeature:any) :void{
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
      });
    }

    function createPopUp(currentFeature:any) {
      const popUps = document.getElementsByClassName('mapboxgl-popup');
      /** Check if there is already a popup on the map and if so, remove it */
      if (popUps[0]) popUps[0].remove();
    
      const popup = new Mapboxgl.Popup({ closeOnClick: false})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(`<h3>${currentFeature.properties.title}</h3><h4>${currentFeature.properties.description}</h4>`)
        .addTo(map);

        popup.on('close', function(e) {
          map.flyTo({
            center: [-76.51972, 3.44],
            zoom: 11.5
          });
        })
    }

    (Mapboxgl as any).accessToken = environment.maptokenkey;
    const map:any = new Mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/fetoro21/ckw03obox54lq14qapznf09sc', // style URL
    attributionControl: false,
    center: [-76.51972, 3.44], // starting position [lng, lat]
    zoom: 11.5 // starting zoom
    });

    const puntosInteres = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "id" :1,
            "title": "Parque del Ingenio",
            "event" :"Exposición de Arte",
            "address": "Parque del Ingenio",
            "date": "18 de Nov. a las 7 PM",
            "description": "Parque arbolado, con zonas para hacer ejercicio, pistas para correr y puestos de comida y bebida."
          },
          "geometry": {
            "coordinates": [-76.531016, 3.385696],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id" : 2,
            "title": "Parque la Flora",
            "event" :"Galeria de Fotos",
            "address": "Parque la Flora",
            "date": "22 de Nov. a las 11 AM",
            "description": "Pequeño parque urbano, con máquinas para hacer ejercicio, zonas de juego y césped donde los niños pueden practicar deportes."
          },
          "geometry": {
            "coordinates": [-76.522277, 3.485272],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "id" :3,
            "title": "Parque de los Poetas",
            "event" :"Esculturas interactivas",
            "address": "Parque de los Poetas",
            "date": "25 de Dic. a las 5 PM",
            "name": "parque",
            "description": "En este bello lugar se realizan espectáculos artísticos de todos los géneros como muestra de la vocación cultural presente en la zona"
          },
          "geometry": {
            "coordinates": [-76.532145, 3.45337],
            "type": "Point"
          }
        }
      ],
    };

    puntosInteres.features.forEach(function (puntosInteres, i) {
      puntosInteres.properties.id = i;
    });

    map.on('load', () => {
      /* Add the data to your map as a layer */
      map.addLayer({
        id: 'locations',
        type: 'symbol',
        layout: {"icon-image": "kr-natl-hwy-2"},
        source: {
          type: 'geojson',
          data: puntosInteres
        }
      });
      buildLocationList(puntosInteres);
      map.on('click', (event:any) => {
        /* Determine if a feature in the "locations" layer exists at that point. */
        const features = map.queryRenderedFeatures(event.point, {
          layers: ['locations']
        });
      
        /* If it does not exist, return */
        if (!features.length) return;
      
        const clickedPoint = features[0];
      
        /* Fly to the point */
        flyToStore(clickedPoint);
      
        /* Close all other popups and display popup for clicked store */
        createPopUp(clickedPoint);
      
        /* Highlight listing in sidebar (and remove highlight for all other listings) */
        const activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        const listing:any = document.getElementById(
          `listing-${clickedPoint.properties.id}`
        );
        listing.classList.add('active');
      });

      const lista:any = document.getElementById("listings")?.lastChild;
      lista.style.borderBottom = "none";

    });
    
function buildLocationList(puntosInteres:any) {
  for (const store of puntosInteres.features) {
    /* Add a new listing section to the sidebar. */
    const listings = document.getElementById('listings');
    if (listings && listings.appendChild) {
    const listing = listings.appendChild(document.createElement('div'));
    
      /* Assign a unique `id` to the listing. */
      listing.id = `listing-${store.properties.id}`;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';
      listing.style.borderBottom ="1px solid #909090";
      listing.style.padding = "10px";
      listing.style.textDecoration = "none";
      listing.style.color = "#404040";

      /* Add the link to the individual listing created above. */
      const link = listing.appendChild(document.createElement('a'));
      link.href = '#footer';
      link.className = 'title';
      link.id = `link-${store.properties.id}`;
      link.innerHTML = `${store.properties.event}`;
      link.style.textDecoration = "none";
      link.style.fontSize = "20px"
      link.style.display = "block";
      link.style.fontWeight = "700";

       /* Add details to the individual listing. */
       const details:any = listing.appendChild(document.createElement('div'));
       details.align = "justify";
       details.innerHTML = `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" height="20px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="LocationOnIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
       ${store.properties.address}<br>
       <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" height="20px" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DateRangeIcon"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></svg>
       ${store.properties.date}`;
      
      link.addEventListener('click', function () {  // funciones al clickear barra lateral Mapa
        for (const feature of puntosInteres.features) {
          if (this.id === `link-${feature.properties.id}`) {
            flyToStore(feature);
            createPopUp(feature);
          }
        }
        const activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        if(this.parentElement){
        this.parentElement.classList.add('active');
        }
      });

      /* if (store.properties.phone) {
        details.innerHTML += ` · ${store.properties.phoneFormatted}`;
      }
      if (store.properties.distance) {
        const roundedDistance = Math.round(store.properties.distance * 100) / 100;
        details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
      }*/
    }
  }
}
  }
}



