import { Component, HostListener, Input } from '@angular/core';
import { ICommentary } from 'src/app/models/interfaces/commentary.interface';

@Component({
  selector: 'app-card-commentary',
  templateUrl: './card-commentary.component.html',
  styleUrls: ['./card-commentary.component.scss']
})
export class CardCommentaryComponent {

  @Input() isStart: boolean = false

  commentary: ICommentary = {
    name: 'Nombre de usuario',
    commentary: 'harum eligendi delectus! Velit consequatur, unde praesentium harum in ut quos soluta fugit alias tempore inventore quod quo repudiandae iste dolor nam minima asperiores! Itaque, fugiat modi? Incidunt quisquam dicta impedit mollitia, dolores et sunt, deserunt minus porro, vero aliquid provident officia corporis! Sed delectus ',
    image: 'assets/imgs/profile.jpeg'
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth < 767){
      this.isMobileSize = true
    } else {
      this.isMobileSize = false
    }
  }

  isMobileSize: boolean = false;

  constructor(){
    if(window.innerWidth < 767){
      this.isMobileSize = true
    } else {
      this.isMobileSize = false
    }
  }
}
