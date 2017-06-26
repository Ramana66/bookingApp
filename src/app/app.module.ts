import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { ListComponent } from './list/list.component';
import {SharedService} from './shared.service';
import {ModalModule} from "ngx-modal";
import {SeatingService} from './seating.service';
import { SeatingComponent } from './seating/seating.component';
import {KeysPipe} from './seating/seating.component';
 
const routing = RouterModule.forRoot([
     { path: '',  component: HomeComponent },
     { path: 'list',  component: ListComponent},
     { path: 'seating',  component: SeatingComponent}   
]);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SeatingComponent,
    KeysPipe

  ],
  imports: [
    ModalModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SharedService,SeatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  