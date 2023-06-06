import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public showmenu: boolean = false;

  allReservations: any;
  reservationLength:any;
  allGifts: any;
  giftLength:any;

  constructor(private reservationService: ReservationService, private giftService: GiftService){}

  ngOnInit(): void {
    this.reservationService.GetReservation().subscribe(
      data=> {
        const response = data;
        this.allReservations = response.data;
        this.reservationLength = this.allReservations.length
      },
      error => {
        const errorResponse = error;
        console.log('errorResponse:', errorResponse);
        
      }
    )

    this.giftService.GetGifts().subscribe(
      data=> {
        const response = data;
        this.allGifts = response.data;
        this.giftLength = this.allGifts.length
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
