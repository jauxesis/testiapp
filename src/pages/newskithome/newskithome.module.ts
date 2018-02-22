import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewskithomePage } from './newskithome';

@NgModule({
  declarations: [
    NewskithomePage,
  ],
  imports: [
    IonicPageModule.forChild(NewskithomePage),
  ],
})
export class NewskithomePageModule {}
