import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/Core/Models/apartment';
import { Residence } from 'src/app/Core/Models/residence';
import { ResidenceService } from 'src/app/Core/Services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  listResidences:Residence[]=[];

 
  listApartments:Apartment[]=[];


  constructor(private fb: FormBuilder, private residenceS:ResidenceService, private r:Router) { }
  addResidenceForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', Validators.required],
    image: ['',Validators.required],
    status: ['',Validators.required],
  });

  
  get name() { return this.addResidenceForm.get('name'); }
  get address() { return this.addResidenceForm.get('address'); }
  get image() { return this.addResidenceForm.get('image'); }
  get status() { return this.addResidenceForm.get('status'); }
 


  saveR(){
  let newResidence: Residence = {   
  id: 5,
  name: this.addResidenceForm.value.name || '',
  address: this.addResidenceForm.value.address || '',
  image: this.addResidenceForm.value.image || '',
  status: this.addResidenceForm.value.status || ''}
  //this.listResidences.push(newResidence);
  this.residenceS.addResidence(newResidence).subscribe(
    ()=>{alert("Residence added successfully");
this.r.navigate(['/residences']);
    });
 
  }
}
