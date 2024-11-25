import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {

  id!: number;
  residence!: Residence;

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" },
    {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R3.jpg", status: "En Construction"}
  ];


  constructor( private actR:ActivatedRoute, private R:Router) { }

  ngOnInit() {
    //this.id = this.actR.snapshot.params['id'];
    this.actR.params.subscribe( params => { this.id = params['id']; });
    console.log(this.id);
    this.residence = this.listResidences.find(r => r.id == this.id)!; 
}
currentResidenceIndex = 0;

  // Getter pour obtenir la résidence actuelle
  get currentResidence() {
    return this.listResidences[this.currentResidenceIndex];
  }

  // Passer à la résidence précédente
  previousResidence() {
    if (this.currentResidenceIndex > 0) {
      console.log(this.id);
      this.currentResidenceIndex--;
      this.R.navigate(['/details', this.listResidences[this.currentResidenceIndex].id]);
      this.residence = this.currentResidence;
    }
  }

  // Passer à la résidence suivante
  nextResidence() {
    if (this.currentResidenceIndex < this.listResidences.length - 1) {
      this.currentResidenceIndex++;
      this.R.navigate(['/details', this.listResidences[this.currentResidenceIndex].id]);
      this.residence = this.currentResidence;
    }
  }
}
