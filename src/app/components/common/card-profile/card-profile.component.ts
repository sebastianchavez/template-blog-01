import { Component } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent {

  profileImage: string = 'assets/imgs/profile.jpeg'

  icons: {
    image: string;
    url: string;
  }[] = [
    {
      image: 'assets/icons/logo-linkedin-pink.svg',
      url: ''
    },
    {
      image: 'assets/icons/logo-instagram-pink.svg',
      url: ''
    },
    {
      image: 'assets/icons/logo-facebook-pink.svg',
      url: ''
    }
  ]
}
