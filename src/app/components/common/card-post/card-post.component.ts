import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {

  @Input() postImage: string = ''
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() date: Date = new Date();

  constructor(
    private router: Router
  ) {}

  goToDetail(){
    this.router.navigateByUrl('detalle/1')
  }
}
