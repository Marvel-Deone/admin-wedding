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
  public pass_code: any
  searchResultstatus = false;
  searchTerm: string = '';
  searchResults: any[] = [];

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

  data = ['apple', 'banana', 'orange', 'grape', 'pineapple'];

  searchReservation() {
    this.searchResultstatus = true;
    this.searchResults = this.allReservations.filter((item: any) =>
      item.pass_code.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.searchResults);
    
  }

  checkInput(e: any) {
    console.log('searchTerm:', e.target.value);
    if (e.target.value == '') {
      console.log('e is empty');
      
      this.searchResultstatus = false;
    }
  }

  changeMenuStatus() {
    this.showmenu = !this.showmenu;
  }
}
