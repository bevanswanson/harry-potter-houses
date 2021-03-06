import { Injectable } from '@angular/core';
import { HOUSES } from './houses';
import { House } from './house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor() { }

  getHouses(): House[] {
    return HOUSES;
  }
}
