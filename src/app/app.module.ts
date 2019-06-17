import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {FeaturesComponent} from './features/features.component'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { FeaturesService } from './features/features.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatExpansionModule, MatTableModule, MatIconModule, MatListModule ],
  declarations: [ AppComponent, FeaturesComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [FeaturesService]
})
export class AppModule { }
