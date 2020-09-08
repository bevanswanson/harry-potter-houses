import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseService } from '../house.service';

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

  getHouses = (): void => {
    this.houses = this.houseService.getHouses();
  }

  onSelect(house: House): void {
    this.selectedHouse = house;
  }

}
