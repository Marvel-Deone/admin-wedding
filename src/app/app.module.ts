import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './public/sidebar/sidebar.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './public/header/header.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GiftComponent } from './gift/gift.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    HeaderComponent,
    ReservationComponent,
    GiftComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
