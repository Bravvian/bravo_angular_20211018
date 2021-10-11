import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {AddVideoComponent} from '../add-video/add-video.component';
import {HomePageRouting} from './home-page.routing';



@NgModule({
  declarations: [
    HomePageComponent,
    AddVideoComponent
  ],
  imports: [
    CommonModule,
    HomePageRouting
  ]
})
export class HomePageModule { }
