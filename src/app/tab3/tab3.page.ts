import { Component } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private map: MapService
  ) {}

  ngOnInit(): void{
    this.map.initMap(25.725517, -100.315205, 'map');
  }

  getCurrentPosition() {
    this.map.getCurrentPosition().then(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      this.map.initMap(lat, lng, 'map');
    });
  }

}
