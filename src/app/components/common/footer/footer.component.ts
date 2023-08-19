import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  links: {
    text: string;
    route: string;
  }[] = [
    {
      text: 'Talleres literarios',
      route: ''
    },
    {
      text: 'Recomendaciones de lectura',
      route: ''
    },
    {
      text: 'Mis escritos',
      route: ''
    },
    {
      text: 'Fanzines',
      route: ''
    },
  ]

  icons: {
    image: string;
    url: string;
  }[] = [
    {
      image: 'assets/icons/logo-linkedin.svg',
      url: ''
    },
    {
      image: 'assets/icons/logo-instagram.svg',
      url: ''
    },
    {
      image: 'assets/icons/logo-facebook.svg',
      url: ''
    }
  ]
}
