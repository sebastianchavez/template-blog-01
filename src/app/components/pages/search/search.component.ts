import { Component } from '@angular/core';
import { ICategory } from 'src/app/models/interfaces/category.interface';
import { IPost } from 'src/app/models/interfaces/post.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  category: ICategory = {
      name: 'Recomendaciones de Lecturas',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi voluptatem. At, assumenda vitae. Libero adipisci fuga dicta ratione eaque nulla inventore culpa accusamus soluta? Dolorum quo consequatur quos ad?',
      image: 'assets/imgs/category01.jpg'
  }

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

  postsResult: IPost[] = []

  constructor(){
    this.setPosts()
    this.setPosts()
    this.setPosts()
  }

  setPosts(){
    this.postsResult.push(...this.posts)
  }
}
