import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ImageSlider} from '../app/components/ImageSlider/ImageSlider'
// Main Angular module = AppModule = ( class + metadata )

// metadata function = annotation = decorator function ==> single object as parameter
@NgModule({
  declarations: [ // array of components , directives , pipes 
    AppComponent,
    ImageSlider
  ],
  imports: [ // array of external modules or external apps
    BrowserModule
  ],
  providers: [], // array of services 
  bootstrap: [AppComponent] // main component --> main entry point to the app
})
export class AppModule { } // normal class
