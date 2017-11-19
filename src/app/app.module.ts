// Decorators
import { NgModule } from '@angular/core';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

// Components
import { AppComponent } from './app.component';
import { PortadaComponent } from './components/portada/portada.component';
import { HeaderComponent } from './components/header/header.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PerrosComponent } from './components/perros/perros.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { RazaComponent } from './components/raza/raza.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NotificationComponent } from "./components/notification/notification.component";

// Services
import { RouteGuard } from "./components/auth/route-guard";
import { ListadoPerrosComponent } from './components/panel/listado-perros/listado-perros.component';
import { NotificationService } from "./services/notification.service";
import { UserService } from "./services/user.service";
import { OwnFireService } from "./services/own-fire.service";
import { SignUpComponent } from "./components/auth/sign-up/sign-up.component";
import { PerrosService } from "./services/perros.service";
import { HttpModule } from "@angular/http";
import { FormPerroComponent } from './components/panel/form-perro/form-perro.component';
import { UploadImagenesComponent } from './components/panel/upload-imagenes/upload-imagenes.component';
import { UploadImagesService } from "./services/upload-images.service";


@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HeaderComponent,
    NosotrosComponent,
    ServiciosComponent,
    PerrosComponent,
    HistoriaComponent,
    RazaComponent,
    SponsorsComponent,
    ContactoComponent,
    GaleriaComponent,
    LoginComponent,
    ListadoPerrosComponent,
    NotificationComponent,
    SignUpComponent,
    FormPerroComponent,
    UploadImagenesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RouteGuard,
    NotificationService,
    UserService,
    OwnFireService,
    PerrosService,
    UploadImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
