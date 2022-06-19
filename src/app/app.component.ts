import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 username: String = '';
 password: String ='';
retypePassword: String='';
ispasswordmatch: boolean = false;


 public onUsernameInputChanged(e: Event){
  this.username =(<HTMLInputElement>e.target).value;
 }

 public  onPasswordInputChanged(e: Event){
  this.username =(<HTMLInputElement>e.target).value;
 }


 public  onRetypePasswordChanged(e: Event){
  this.retypePassword = (<HTMLInputElement>e.target).value;
 //اینگونه هم میشود زد 
  // if (this.password !== this.retypePassword) {
  //   this.isPasswordsmatch = false;
  // } else{
  //   this.isPasswordsmatch = true;
  // }

this.isPasswordmatch = this.password !== this.retypePassword ? false: true;
 }

} 
