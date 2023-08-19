import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-categories',
  templateUrl: './aside-categories.component.html',
  styleUrls: ['./aside-categories.component.scss']
})
export class AsideCategoriesComponent {

  categories: {
    image: string;
    route: string;
  } [] = [
    {
      image: 'assets/imgs/category01.jpg',
      route: 'categoria/1'
    },
    {
      image: 'assets/imgs/category02.jpg',
      route: 'categoria/2'
    },
    {
      image: 'assets/imgs/category03.jpg',
      route: 'categoria/3'
    },
    {
      image: 'assets/imgs/category04.jpg',
      route: 'categoria/4'
    },
    {
      image: 'assets/imgs/category05.jpg',
      route: 'categoria/5'
    }
  ]

  constructor(
    private router: Router
  ){

  }

  goToPage(route: string){
    this.router.navigateByUrl(route)
  }
}
