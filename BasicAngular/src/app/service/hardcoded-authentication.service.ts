import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : string, password: string){
    //console.log('before ' + this.isUserLoggedIn());
    if (username === "username1" && password === "password1"){
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
    return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
