import { Injectable } from '@angular/core';
import { HOUSES } from '../../data/houses';
import { House } from '../../model/house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor() { }

  getHouses(): House[] {
    return HOUSES;
  }
}
