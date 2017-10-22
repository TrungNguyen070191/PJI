import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {

  isNewGroup: boolean;
  groupHeader: string;

  constructor() {
    this.isNewGroup = false;
    this.groupHeader = "Group";
  }

  goNewGroup(){
    this.isNewGroup = true;
    this.groupHeader = "New Group";
  }

  goCancel(){
    this.isNewGroup = false;
    this.groupHeader = "Group";
  }
}
