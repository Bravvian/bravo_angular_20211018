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
import {MatCardModule} from '@angular/material/card';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';



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
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressBarModule,
    FormsModule
  ]
})
export class HomePageModule { }
