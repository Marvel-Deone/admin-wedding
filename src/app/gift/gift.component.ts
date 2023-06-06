import { Component } from '@angular/core';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent {
  public showmenu: boolean = false;
  allGifts: any;
  
  constructor(private giftService: GiftService){}

  ngOnInit(): void {
    this.giftService.GetGifts().subscribe(
      data=> {
        const response = data;
        this.allGifts = response.data
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
