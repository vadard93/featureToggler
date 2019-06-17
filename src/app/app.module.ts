import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {FeaturesComponent} from './features/features.component'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatInputModule} from '@angular/material';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { FeaturesService } from './features/features.service';

import {Routes, RouterModule} from '@angular/router';
import { FeatureEditComponent } from './feature-edit/feature-edit.component';
import { FeatureStatusComponent } from './feature-status/feature-status.component';
import { HomeComponent } from './home/home.component';


// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'edit/:featureid', component: FeatureEditComponent},
    { path: 'status/:featureid/:serviceid', component: FeatureStatusComponent},
    { path: 'status/:featureid', component: FeatureStatusComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatExpansionModule, MatTableModule, MatIconModule, MatListModule, MatFormFieldModule,MatInputModule, RouterModule.forRoot(appRoutes), ],
  declarations: [ AppComponent, FeaturesComponent, FeatureEditComponent, FeatureStatusComponent, HomeComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [FeaturesService]
})
export class AppModule { }
