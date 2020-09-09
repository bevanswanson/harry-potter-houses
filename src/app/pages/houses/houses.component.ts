import { Component, OnInit } from '@angular/core';
import { House } from '../../model/house';
import { HouseService } from '../../services/house/house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses: House[];
  selectedHouse: House;

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(): void {
    this.houses = this.houseService.getHouses();
  }

  onSelect($event: House): void {
    this.selectedHouse = $event;
  }

}
