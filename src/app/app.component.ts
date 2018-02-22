import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MenuService } from '../services/menu-service';
import { AppSettings } from '../services/app-settings';

import { IService } from '../services/IService';

@Component({
  templateUrl: 'app.html',
  providers: [MenuService]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = "NewskithomePage";
  pages: any;
  params:any;
  leftMenuTitle: string;

  constructor(public platform: Platform,
    public menu: MenuController,
    private menuService: MenuService,
    public modalCtrl: ModalController) {
    this.initializeApp();

    this.pages = menuService.getAllThemes();
    this.leftMenuTitle = menuService.getTitle();
    
        console.log("snapshot")
    this.menuService.load(null).subscribe( snapshot => {
      //debugger;
        console.log(snapshot)
        this.params = snapshot;
    });

    // if (AppSettings.SHOW_START_WIZARD) {
    //   this.presentProfileModal();
    // }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      localStorage.setItem("mailChimpLocal", "true");
    });
  }

  presentProfileModal() {
    const profileModal = this.modalCtrl.create("IntroPage");
    profileModal.present();
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    console.log("page to open ",page)
    if (page.singlePage) {
      console.log("im in if app");
        // this.menu.open();
        // this.nav.push(this.getPageForOpen(page.theme), {
        //   service: this.getServiceForPage(page.theme),
        //   page: page,
        //   componentName: page.theme
        // });
        this.nav.setRoot(page.component,{
          componentName:page.theme
        })
    } else {
      console.log("im in else app");
      this.nav.setRoot("ItemsPage", {
        componentName: page.theme
      });
    }
  }

  getPageForOpen(value: string): any {
    return null;
  }

  getServiceForPage(value: string): IService {
    return null;
  }
}
