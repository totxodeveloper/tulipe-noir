import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

// Components
import { PortadaComponent } from "./components/portada/portada.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { PerrosComponent } from "./components/perros/perros.component";
import { HistoriaComponent } from "./components/historia/historia.component";
import { RazaComponent } from "./components/raza/raza.component";
import { SponsorsComponent } from "./components/sponsors/sponsors.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { NosotrosComponent} from "./components/nosotros/nosotros.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { ListadoPerrosComponent } from "./components/panel/listado-perros/listado-perros.component";

// Services
import { RouteGuard } from "./components/auth/route-guard";
import {SignUpComponent} from "./components/auth/sign-up/sign-up.component";



const appRoutes: Routes = [
  { path: '', redirectTo: '/portada', pathMatch: 'full'},
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'portada', component: PortadaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'perros', component: PerrosComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'raza', component: RazaComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'jorge-admin', component: LoginComponent },
  { path: 'panel', component: ListadoPerrosComponent, canActivate: [RouteGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'portada' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
