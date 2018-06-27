import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { ComponentsModule } from '../../components/components.module';
import { PscUiModule } from 'psc-ui';
import { PicUiModule } from '@ivanntis/pic-ui';



@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    ComponentsModule,
    PscUiModule,
    PicUiModule
  ],
})
export class MainPageModule {}
