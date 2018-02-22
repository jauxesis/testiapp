import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { IService } from '../../services/IService';
import {  Content } from 'ionic-angular';

/**
 * Generated class for the NewskitnewslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newskitnewslist',
  templateUrl: 'newskitnewslist.html',
  providers:[ListViewExpandableService]
})
export class NewskitnewslistPage {

  page: any;
  service: IService;
  params: any = {};

  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  
  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  constructor(public navCtrl: NavController, navParams: NavParams,
    public listServ:ListViewExpandableService
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = {
      theme:"layout3",
      title:"Centered with header"
    };//navParams.get('page');
    this.service = this.listServ;//navParams.get('service');
    console.log(this.page,this.service,navParams)
    // if (this.service) {
    //   this.params = this.service.prepareParams(this.page, navCtrl);
    //   this.params.data = this.service.load(this.page);
    // } else { 
    //   navCtrl.setRoot("HomePage");
    // }		
   
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

}
