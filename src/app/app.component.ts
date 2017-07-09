import { Component } from "@angular/core";
import { AngularFire } from "angularfire2";
import { ChatService } from "./services/chat.service";


@Component ( {
  selector   : "app-root",
  templateUrl: "./app.component.html",
  styleUrls  : [ "./app.component.css" ]
} )
export class AppComponent {
  
  
  constructor (private _chatServices:ChatService ) {
    // this.chats = af.database.list ( "/chats" );
  }
}
