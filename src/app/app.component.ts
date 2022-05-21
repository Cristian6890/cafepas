import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafepas';

  constructor(private router:Router){}

  sobreNosotros(){
    this.router.navigate(['sobrenosotros']);
  }

  Contacto(){
    
    this.router.navigate(['contacto']);

  }

  Servicios(){
    
    this.router.navigate(['servicios']);

  }

  Vision(){
    this.router.navigate(['vision']);
    

  }



}
