import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GiftComponent } from './gift/gift.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '',  redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in',  component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'gifts', component: GiftComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
