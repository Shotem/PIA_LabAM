import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;
declare let google;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  async initMap(lat: number, lng: number, id: string) {
      const map = await new google.maps.Map(document.getElementById('map'), {
      center: {lat, lng},
      zoom: 15
    });

    const marker = new google.maps.Marker({
      position: {lat, lng},
      map
    })
  }

  async getCurrentPosition() {
    return await Geolocation.getCurrentPosition();
  }

}
