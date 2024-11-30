import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'residences',  component: ResidencesComponent},
  {path: 'details/:id', component:ResidenceDetailsComponent},
  {path: 'addResidence', component: AddResidenceComponent},
  {path: 'apartments', component: ApartmentsComponent},
  {path: 'apartments/:idR', component: ApartmentsByResidenceComponent},
  {path: 'addApartment', component: AddApartmentComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
