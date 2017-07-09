import { Component, OnInit } from "@angular/core";
import { ChatService } from "../../services/chat.service";

@Component ( {
  selector   : "app-login",
  templateUrl: "./login.component.html",
  styleUrls  : [ "./login.component.css" ]
} )
export class LoginComponent implements OnInit {
  
  constructor ( private _chatServices : ChatService ) {
  }
  
  ngOnInit () {
  }
  
  login ( proveedor : string ) {
  this._chatServices.login(proveedor);
  }
  
}
