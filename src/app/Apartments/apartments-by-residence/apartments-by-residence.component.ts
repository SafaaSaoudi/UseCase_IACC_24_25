import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/Core/Models/apartment';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent {

  
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" },
    {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R3.jpg", status: "En Construction"}
  ];


  listApartments:Apartment[]=[
    {id:1,"apartNum":11,"floorNum":0,"surface":100,"terrace":true,"surfaceterrace":20,"category":"S+1", ResidenceId: this.listResidences[0].id },
    {id:2,"apartNum":102,"floorNum":1,"surface":130,"terrace":false,"surfaceterrace":0,"category":"S+2",ResidenceId: this.listResidences[0].id},
    {id:3,"apartNum":103,"floorNum":1,"surface":150,"terrace":true,"surfaceterrace":30,"category":"S+3",ResidenceId: this.listResidences[1].id},
    {id:4,"apartNum":204,"floorNum":2,"surface":150,"terrace":true,"surfaceterrace":30,"category":"S+3",ResidenceId: this.listResidences[2].id},
  ];

  constructor(private actR: ActivatedRoute) { }
  ngOnInit() {
    this.actR.params.subscribe(
      params => {
        const idR = params['idR'];
        this.listApartments = this.listApartments.filter(a => a.ResidenceId == idR);
      }
    );
  }
}
