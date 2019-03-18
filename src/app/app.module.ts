import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { TreeComponent } from './tree/tree.component';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ProdcardComponent } from './prodcard/prodcard.component';
import { ProdeditorComponent } from './prodeditor/prodeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProdlistComponent,
    TreeComponent,
    
    ProdcardComponent,
    ProdeditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxJsonViewerModule,
    NgbModule,
  FormsModule    ],
  providers: [ NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ProdeditorComponent]
})
export class AppModule { }
