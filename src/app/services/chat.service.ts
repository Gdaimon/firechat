import { Injectable } from "@angular/core";
import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable } from "angularfire2";
import { Mensaje } from "../interfaces/mensaje.interface";

@Injectable ()
export class ChatService {
  chats : FirebaseListObservable<any[]>;
  usuario : any = {};
  
  constructor ( private af : AngularFire ) {
    
    if ( localStorage.getItem ( "usuario" ) ) {
      // Usuario Logeado
      this.usuario = JSON.parse ( localStorage.getItem ( "usuario" ) );
    } else {
      this.usuario = null;
    }
    
  }
  
  cargarMensaje () {
    this.chats = this.af.database.list ( "chats", {
      query: {
        limitToLast: 20,
        orderByKey : true
      }
    } );
    return this.chats;
  }
  
  agregarMensaje ( texto : string ) {
    let mensaje : Mensaje = {
      nombre : this.usuario.auth.displayName,
      mensaje: texto,
      uid    : this.usuario.uid
    };
    return this.chats.push ( mensaje );
  }
  
  login ( proveedor : string ) {
    this.af.auth.login ( {
      provider: AuthProviders.Google,
      method  : AuthMethods.Popup,
    } ).then ( data => {
      console.log ( data );
      this.usuario = data;
      localStorage.setItem ( "usuario", JSON.stringify ( data ) );
    } ).catch ( () => {
      console.error ( "No se ha Logeado" );
    } )
    ;
  }
  
  logout () {
    localStorage.removeItem ( "usuario" );
    this.usuario = null;
    this.af.auth.logout ();
  }
  
}
