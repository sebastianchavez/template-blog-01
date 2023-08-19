import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menu: {
    route: string;
    text: string;
  }[] = [
    {
      route: 'categoria/mis-escritos',
      text: 'Mis escritos'
    },
    {
      route: 'categoria/fanzines',
      text: 'Fanzines'
    },
    {
      route: 'categoria/talleres',
      text: 'Talleres'
    },
    {
      route: 'contacto',
      text: 'Contacto'
    }
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

  logOut(){
    localStorage.clear()
  }
}
