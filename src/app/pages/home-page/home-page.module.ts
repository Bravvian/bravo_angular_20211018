import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {AddVideoComponent} from '../add-video/add-video.component';
import {HomePageRouting} from './home-page.routing';
import {MatButtonModule} from '@angular/material/button';
import {ListComponent} from '../../components/list/list.component';
import {CardComponent} from '../../components/card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    AddVideoComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomePageRouting,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class HomePageModule { }
