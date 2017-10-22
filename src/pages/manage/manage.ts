import { Component } from '@angular/core';
import { NavController, App  } from 'ionic-angular';

import { AuthenServiceProvider } from '../../providers/authen-service/authen-service';
import { MyProfilePage } from '../my-profile/my-profile';
import { LoginPage } from '../login/login';
import { GroupPage } from '../group/group';

@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html'
})
export class ManagePage {

  username = '';
  email = '';

  constructor(public nav: NavController, public app: App, private auth: AuthenServiceProvider){
     let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  goProfilePage(){
    this.nav.push(MyProfilePage);
  }

  goGroupPage(){
    this.nav.push(GroupPage);
  }

  logout() {
    this.auth.logout().subscribe(succ => {
      // this.nav.setRoot(LoginPage)
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
}
