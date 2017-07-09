import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "angularfire2";
// Configuracion Firebase
import { firebaseConfig } from "../environments/firebase.config";

import { AppComponent } from "./app.component";
import { ChatComponent } from "./componentes/chat/chat.component";
import { ChatService } from "./services/chat.service";
import { LoginComponent } from './componentes/login/login.component';

@NgModule ( {
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp ( firebaseConfig )
  ],
  providers   : [ ChatService ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
