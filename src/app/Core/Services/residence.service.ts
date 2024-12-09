import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../Models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  residenceUrl="http://localhost:3000/Residences";

  constructor(private http: HttpClient) { }

  getAllResidences(){
    return this.http.get<Residence[]>(this.residenceUrl);
  }

  getResidenceById(id:number){
    return this.http.get<Residence>(this.residenceUrl+"/"+id);
  }

  addResidence(residence:Residence){
    return this.http.post(this.residenceUrl,residence);
  }

  deleteResidence(id:number){
    return this.http.delete(this.residenceUrl+"/"+id);
  }

  updateResidence(residence:Residence){
    return this.http.put(this.residenceUrl+"/"+residence.id,residence);
  }

}
