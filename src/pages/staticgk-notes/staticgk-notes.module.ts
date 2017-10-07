import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaticgkNotesPage } from './staticgk-notes';
import { SharedTablePage } from '../shared-table/shared-table';

@NgModule({
  declarations: [
    StaticgkNotesPage,
    SharedTablePage
  ],
  imports: [
    IonicPageModule.forChild(StaticgkNotesPage),
  ],
})
export class StaticgkNotesPageModule {}
