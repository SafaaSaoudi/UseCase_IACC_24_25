import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apartment } from '../Models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  apartsURL = 'http://localhost:3000/apartments';
  constructor(private hhtp:HttpClient) { }

  getApartments(){
    return this.hhtp.get<Apartment[]>(this.apartsURL);
  }
getApartmentByRsidence(idR:number){
  //return this.hhtp.get<Apartment[]>(`${this.apartsURL}?ResidenceId=${idR}`);
  return this.hhtp.get<Apartment[]>(this.apartsURL+'?ResidenceId='+idR);

}
  deleteApartment(id:number){
    return this.hhtp.delete(`${this.apartsURL}/${id}`);
  }

  addApartment(apartment:Apartment){
    return this.hhtp.post(this.apartsURL, apartment);
  }
  
}
