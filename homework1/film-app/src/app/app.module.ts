import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FilmCartComponent } from './film-cart/film-cart.component';
import { FilmCartService } from './film-cart/film-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    FilmCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [FilmCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
