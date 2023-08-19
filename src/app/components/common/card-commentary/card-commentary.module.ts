import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCommentaryComponent } from './card-commentary.component';



@NgModule({
  declarations: [
    CardCommentaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardCommentaryComponent
  ]
})
export class CardCommentaryModule { }
