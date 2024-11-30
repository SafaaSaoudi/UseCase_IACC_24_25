import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Apartment } from 'src/app/Core/Models/apartment';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

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


  constructor(private fb: FormBuilder) { }
  addResidenceForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', Validators.required],
    image: ['',Validators.required],
    status: ['',Validators.required],
    Apartments: this.fb.array([ ])
  });

  
  get name() { return this.addResidenceForm.get('name'); }
  get address() { return this.addResidenceForm.get('address'); }
  get image() { return this.addResidenceForm.get('image'); }
  get status() { return this.addResidenceForm.get('status'); }
  get Apartments() { return this.addResidenceForm.get('Apartments') as FormArray; }


  addApartment() {
    const apartmentForm = this.fb.group({
      apartNum: [''],
      floorNum: [''],
      surface: [''],
      terrace: [''],
      surfaceterrace: [''],
      category: ['']
    });
  
    this.Apartments.push(apartmentForm);
  }

  saveR(){
let newResidence: Residence = {   
  id: this.listResidences.length + 1,
  name: this.addResidenceForm.value.name || '',
  address: this.addResidenceForm.value.address || '',
  image: this.addResidenceForm.value.image || '',
  status: this.addResidenceForm.value.status || ''}
  this.listResidences.push(newResidence);
  
  
  this.Apartments.value.forEach((element: any) => {
  let newApart: Apartment = {
    id: this.listApartments.length+1,
    apartNum: element.apartNum,
    floorNum: element.floorNum,
    surface: element.surface,
    terrace: element.terrace,
    surfaceterrace: element.surfaceterrace,
    category: element.category,
    ResidenceId: newResidence.id
  }
  this.listApartments.push(newApart);   
});

console.log(this.listResidences);
console.log(this.listApartments);

  }
}
