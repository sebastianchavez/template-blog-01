import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./components/pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'categoria/:category',
    loadChildren: () => import('./components/pages/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./components/pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
