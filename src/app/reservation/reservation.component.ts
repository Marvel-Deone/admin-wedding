import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  public showmenu: boolean = false;
  allReservations: any;

  constructor(private reservationService: ReservationService){}

  ngOnInit(): void {
    this.reservationService.GetReservation().subscribe(
      data=> {
        const response = data;
        this.allReservations = response.data
      },
      error => {
        const errorResponse = error;
        console.log('errorResponse:', errorResponse);
        
      }
    )
  }

  changeMenuStatus() {
    this.showmenu = !this.showmenu;
  }
}
