import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardProfileModule } from '../../common/card-profile/card-profile.module';
import { AsideCategoriesModule } from '../../common/aside-categories/aside-categories.module';
import { CardPostModule } from '../../common/card-post/card-post.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    CardProfileModule,
    AsideCategoriesModule,
    CardPostModule,
  ],
})
export class HomeModule { }
