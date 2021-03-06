import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit, OnDestroy{

  newMovies = []
  subNewMovies: Subscription

  topMovies = []
  subTopMovies: Subscription

  constructor(private movieService: MoviesService) {

  }
  
  ngOnInit(): void {
    // this.movieService.getMovie(458156).subscribe(response => {
    //   console.log(response)
    //})
    this.subNewMovies = this.movieService.getNewMovies().subscribe(response => {
      this.newMovies = response.results.slice()
    })
    this.subTopMovies = this.movieService.getTopMovies().subscribe(response => {
      this.topMovies = response.results.slice()
      console.log(this.topMovies[0])
    })
  }

  ngOnDestroy() {
    this.subNewMovies.unsubscribe()
    this.subTopMovies.unsubscribe()
  }
}