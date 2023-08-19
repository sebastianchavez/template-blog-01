import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { CardProfileModule } from '../../common/card-profile/card-profile.module';
import { AsideCategoriesModule } from '../../common/aside-categories/aside-categories.module';
import { CardPostModule } from '../../common/card-post/card-post.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CardProfileModule,
    AsideCategoriesModule,
    CardPostModule,
  ]
})
export class SearchModule { }
