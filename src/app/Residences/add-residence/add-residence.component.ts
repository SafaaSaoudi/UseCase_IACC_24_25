import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/Core/Models/apartment';
import { Residence } from 'src/app/Core/Models/residence';
import { ResidenceService } from 'src/app/Core/Services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  addResidenceForm!: FormGroup;
  update = false;

  constructor(private fb: FormBuilder, private residenceS:ResidenceService, private r:Router, private actR: ActivatedRoute) { }
  
  ngOnInit() {
    this.addResidenceForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['',Validators.required],
      status: ['',Validators.required],
    });
    const  id = Number(this.actR.snapshot.queryParamMap.get('residence'));
    if(id){
      this.update = true;
      this.residenceS.getResidenceById(id).subscribe(
        (data) => this.addResidenceForm.patchValue(data) 
      );
    }
  else {
    
      this.residenceS.getAllResidences().subscribe(data => { length= data.length;
        this.addResidenceForm.patchValue({ id: this.generateRandomId() });
      
      })
      
      
  }

  }
  generateRandomId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
  }
  

 get name() { return this.addResidenceForm.get('name'); }
 get address() { return this.addResidenceForm.get('address'); }
 get image() { return this.addResidenceForm.get('image'); }
 get status() { return this.addResidenceForm.get('status'); }
 


  saveR(){
  
      const newResidence: Residence = this.addResidenceForm.value;
      if(this.update){
        this.residenceS.updateResidence(newResidence).subscribe(
          ()=>{alert("Residence updated successfully");
        this.r.navigate(['/residences']);
          });
      }
      else{
        this.residenceS.addResidence(newResidence).subscribe(
          ()=>{alert("Residence added successfully");
        this.r.navigate(['/residences']);
          }
        );
      }
  
  }
}


