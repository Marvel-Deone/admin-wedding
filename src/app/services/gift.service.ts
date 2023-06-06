import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/evironment.prod';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  private uriseg = environment.baseUrl;
  header: any;
  gifts: any

  constructor(private http: HttpClient) { }
  
  
  GetGifts() {
    const URI = this.uriseg + '/giftus';

    return this.http.get(URI).pipe(map(response => {
      this.gifts = response;
      return this.gifts;
    }))
  }
}
