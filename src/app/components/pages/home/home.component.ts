import { Component, HostListener } from '@angular/core';
import { ICategory } from 'src/app/models/interfaces/category.interface';
import { IPost } from 'src/app/models/interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories: ICategory[] = [
    {
      name: 'Recomendaciones de Lecturas',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad?',
      image: 'assets/imgs/category01.jpg'
    },
    {
      name: 'Fanzines',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad?',
      image: 'assets/imgs/category02.jpg'
    },
    {
      name: 'Mis escritos',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad?',
      image: 'assets/imgs/category03.jpg'
    },
    {
      name: 'Talleres literarios',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad?',
      image: 'assets/imgs/category04.jpg'
    }
  ]

  posts: IPost[] = [
    {
      categoryId: 0,
      title: 'Título publicación',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad?',
      file: '',
      image: 'assets/imgs/category01.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 0,
      title: 'Título publicación',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad?',
      file: '',
      image: 'assets/imgs/category02.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 0,
      title: 'Título publicación',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad?',
      file: '',
      image: 'assets/imgs/category03.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth);
    if(event.target.innerWidth < 767){
      this.isMobileSize = true
    } else {
      this.isMobileSize = false
    }
  }

  isMobileSize: boolean = false;

  constructor(){
    console.log(window.innerWidth);
    if(window.innerWidth < 767){
      this.isMobileSize = true
    } else {
      this.isMobileSize = false
    }
  }
}
