import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/evironment.prod';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private uriseg = environment.baseUrl;
  header: any;
  reservations: any

  constructor(private http: HttpClient) { }
  
  
  GetReservation() {
    const URI = this.uriseg + '/reservations';

    return this.http.get(URI).pipe(map(response => {
      this.reservations = response;
      return this.reservations;
    }))
  }

}
