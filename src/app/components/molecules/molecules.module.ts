import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { LeftOptionComponent } from './left-option/left-option.component';



@NgModule({
  declarations: [
    LeftOptionComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    
  ],
  exports: [
    LeftOptionComponent
  ]

})
export class MoleculesModule { }
