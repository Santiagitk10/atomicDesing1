import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopPannelComponent } from './top-pannel/top-pannel.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { AtomsModule } from '../atoms/atoms.module';
import { ChatfeedComponent } from './chatfeed/chatfeed.component';



@NgModule({
  declarations: [
    TopPannelComponent,
    ContactlistComponent,
    ChatfeedComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    AtomsModule

  ],
  exports: [
    TopPannelComponent,
    ContactlistComponent,
    ChatfeedComponent
  ]
})
export class OrganismsModule { }
