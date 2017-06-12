import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GeocodingService} from './geocoding.service';
import { Map, GeoJSON } from 'leaflet';
@Injectable()
export default class MapService {
  public map: Map;
  public baseMaps: any;
  private currentLayer: GeoJSON;
  public editing: boolean;
  public removing: boolean;
  public marker: any;

  constructor(private http: Http, private geocoder: GeocodingService) {
        this.baseMaps = {
            OpenStreetMap: L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                // tslint:disable-next-line:max-line-length
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
            }),
            Esri: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
                // tslint:disable-next-line:max-line-length
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
            }),
            CartoDB: L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                // tslint:disable-next-line:max-line-length
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            })
        };

        this.editing = false;
        this.removing = false;
  }

  initialize() {
        const map = L.map('map', {
            zoomControl: false,
            center: L.latLng(40.731253, -73.996139),
            zoom: 12,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.baseMaps.OpenStreetMap]
        });

        L.control.zoom({ position: 'topright' }).addTo(map);
        L.control.layers(this.baseMaps).addTo(map);
        L.control.scale().addTo(map);

        this.map = map;
        this.geocoder.getCurrentLocation()
            .subscribe(
                location => map.panTo([location.latitude, location.longitude]),
                err => console.error(err)
            );
  }
  onMapClick() {
    this.map.on('click', (e: any) => {
              if (this.editing) {
                  if ( this.marker != null ) { this.marker.remove()};
                  this.marker = L.marker(e.latlng, {
                    icon: L.icon({
                        iconUrl: require('../../images/marker-icon.png') as string,
                        shadowUrl: require('../../images/marker-shadow.png') as string,
                    }),
                    draggable: true,
                  })
                  .bindPopup('Marker at ' + e.latlng, {
                      offset: L.point(12, 6)
                  })
                  .addTo(this.map)
                  .openPopup();

                  this.marker.on('click', (event: MouseEvent) => {
                      if (this.removing) {
                          this.map.removeLayer(this.marker);
                      }
                  });

                  this.marker.on('move', (event: MouseEvent) => {
                    this.marker.bindPopup('Marker at ' + this.marker.getLatLng(), {
                      offset: L.point(12, 6)
                    });
                  });
              }
      });
  }
    toggleEditing() {
        this.editing = !this.editing;
        if (this.editing && this.removing) {
            this.removing = false;
        }
    }

    toggleRemoving() {
        this.removing = !this.removing;

        if (this.editing && this.removing) {
            this.editing = false;
        }
    }

  disableMouseEvent(elementId: string) {
        const element = <HTMLElement>document.getElementById(elementId);
        // stops the bubbling of an event to parent elements,
        // preventing any parent event handlers from being executed.
        L.DomEvent.disableClickPropagation(element);
        L.DomEvent.disableScrollPropagation(element);
    }

}
