import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { CardCommentaryModule } from '../../common/card-commentary/card-commentary.module';
import { AsideCategoriesModule } from '../../common/aside-categories/aside-categories.module';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    CardCommentaryModule,
    AsideCategoriesModule,
  ]
})
export class DetailModule { }
