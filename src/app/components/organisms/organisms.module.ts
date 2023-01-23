import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopPannelComponent } from './top-pannel/top-pannel.component';
import { MoleculesModule } from '../molecules/molecules.module';



@NgModule({
  declarations: [
    TopPannelComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule

  ],
  exports: [
    TopPannelComponent
  ]
})
export class OrganismsModule { }
