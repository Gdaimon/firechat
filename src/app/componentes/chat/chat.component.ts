import { Component, OnInit } from "@angular/core";
import { ChatService } from "../../services/chat.service";

@Component ( {
  selector   : "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls  : [ "./chat.component.css" ]
} )
export class ChatComponent implements OnInit {
  
  mensaje : string = "";
  elemento : any;
  
  constructor ( private _chatServices : ChatService ) {
  
  }
  
  ngOnInit () {
    this.elemento = document.getElementById ( "app-mensajes" );
    this._chatServices.cargarMensaje ()
      .subscribe ( () => {
        console.log ( "Mensajes cargados...!" );
        setTimeout ( () => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50 );
      } );
  }
  
  enviar () {
    if ( this.mensaje.length == 0 ) {
      return;
    }
    this._chatServices.agregarMensaje ( this.mensaje )
      .then ( () => console.log ( "Hecho...!" ) )
      .catch ( ( error ) => console.error ( error ) );
    this.mensaje = "";
    // console.log ( this.mensaje );
  }
}
