import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent} from './Components/sobre-nosotros/sobre-nosotros.component';
import {  ContactoComponent} from './Components/contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { VisionComponent } from './vision/vision.component';


const routes: Routes = [
  {path: 'sobrenosotros', component: SobreNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'servicio', component: ServiciosComponent},
  {path: 'vision', component: VisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
