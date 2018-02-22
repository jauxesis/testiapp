import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewskithomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newskithome',
  templateUrl: 'newskithome.html',
})
export class NewskithomePage {

  // @Input() data: any;
  // @Input() events: any;
  // @ViewChild(Content) content: Content;

  active: boolean;
  headerImage:any = "";

  process:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.process)
    for(let i=0;i<10;i++){
      this.process.push({key:i});
    }
  }

    

   

    // onEvent(event: string, item: any, e: any) {
    //     if (e) {
    //         e.stopPropagation();
    //     }
    //     if (this.events[event]) {
    //         this.events[event](item);
    //     }
    // }

    // ngOnChanges(changes: { [propKey: string]: any }) {
    //     if (changes.data && changes.data.currentValue) {
    //         this.headerImage = changes.data.currentValue.headerImage;
    //     } 
    //     this.subscribeToIonScroll();
    // }

    // ngAfterViewInit() {
    //     this.subscribeToIonScroll();
    // }

    // ngAfterViewChecked() {
    //     this.subscribeToIonScroll();
    // }

    // isClassActive() {
    //     return this.active;
    // }

    // subscribeToIonScroll() {
    //     if (this.content != null && this.content.ionScroll != null) {
    //         this.content.ionScroll.subscribe((d) => {
    //             if (d.scrollTop < 200 ) {
    //                 this.active = false;
    //                 return;
    //             }
    //             this.active = true;
    //         });
    //     }
    // }

}
