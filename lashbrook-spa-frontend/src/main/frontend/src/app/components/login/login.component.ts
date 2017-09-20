import {Component} from '@angular/core';
import {UserLoginDetails} from "./user-login-details";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loggedIn: boolean = false;
  userLoginDetails: UserLoginDetails = new UserLoginDetails();

  constructor(private http: Http) {

  }

  submitLogin() {
    let headers = new Headers({'Content-Type': 'application/json', 'X-CSRF-TOKEN': 'abc'});
    let options = new RequestOptions({headers: headers});

    this.http.post("/user/login", JSON.stringify(this.userLoginDetails), options)
      .subscribe((res: Response) => {
        console.log(res.json());
      });

    console.log("Submitted login request");
  }

  submitLogout() {
    console.log("Submitted logout");
  }
}
