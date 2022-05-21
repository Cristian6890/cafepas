import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './Components/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { VisionComponent } from './vision/vision.component';
import { MisionComponent } from './mision/mision.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    ServiciosComponent,
    VisionComponent,
    MisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
