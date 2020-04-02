import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetallelibroComponent } from './detallelibro/detallelibro.component';
import { LibroclickedService } from './libroclicked.service'

const rutas: Routes = [
  // El orden de las rutas es super importante Cuando la app no se comporte como queremos revisar las rutas
  {path: 'listado-libros', component: LibrosComponent },
  {path: 'sobre-nosotros', component: SobrenosotrosComponent },
  {path: 'informacion/:libroId', component: DetallelibroComponent },
  {path: 'informacion', redirectTo: '/404' },
  
  // Siempre al final, para que no rompa el resto de rutas
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    SobrenosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent,
    NotfoundComponent,
    DetallelibroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
