import { Component, OnInit } from '@angular/core';
import { FilmCartService } from './film-cart.service'

@Component({
  selector: 'app-film-cart',
  templateUrl: './film-cart.component.html',
  styleUrls: ['./film-cart.component.css']
})
export class FilmCartComponent implements OnInit {
  filmList: Object[] = []
  filmName: string;
  constructor(private filmCartService: FilmCartService) { }

  ngOnInit() {
      this.filmName = "Star Wars"
      this.getFilms();
  }


  private getFilms(){
    if(!this.filmName) { return; }
      this.filmCartService.getFilms(this.filmName).subscribe(data => {
          this.filmList = data;
      })
  }

}
