import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideNewPage } from './slide-new';

@NgModule({
  declarations: [
    SlideNewPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideNewPage),
  ],
})
export class SlideNewPageModule {}
