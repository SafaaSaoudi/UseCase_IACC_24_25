import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/Core/Models/apartment';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {

  apartForm!: FormGroup;
  id!: number;
  constructor() { }

  
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
    ngOnInit(): void {
      

      this.apartForm= new FormGroup({
        apartNum : new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
        floorNum : new FormControl("", [Validators.required,Validators.pattern("[0-9]*")]),
        surface : new FormControl("", Validators.required),
        terrace : new FormControl("", Validators.required),
        surfaceTerrace : new FormControl("", Validators.required),
        category : new FormControl("", Validators.required),
        residence : new FormControl("", Validators.required),
      })
      
    
    }
    get apartNum() { return this.apartForm.get('apartNum'); }
    get floorNum() { return this.apartForm.get('floorNum'); }
    get surface() { return this.apartForm.get('surface'); }
    get surfaceTerrace() { return this.apartForm.get('surfaceTerrace'); }
    get terrace() { return this.apartForm.get('terrace'); }
    get category() { return this.apartForm.get('category'); }
    get residence() { return this.apartForm.get('residence'); }
  
    SaveApart(){
      let newApart: Apartment = {
        id: this.listApartments.length+1,
        apartNum: this.apartForm.value.apartNum,
        floorNum: this.apartForm.value.floorNum,
        surface: this.apartForm.value.surface,
        terrace: this.apartForm.value.terrace,
        surfaceterrace: this.apartForm.value.surfaceTerrace,
        category: this.apartForm.value.category,
        ResidenceId: this.apartForm.value.residence
      }
      this.listApartments.push(newApart);
      console.log(this.listApartments);
    }
  
}
