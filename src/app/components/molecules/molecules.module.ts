import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { LeftOptionComponent } from './left-option/left-option.component';
import { RightOptionComponent } from './right-option/right-option.component';



@NgModule({
    declarations: [
        LeftOptionComponent,
        RightOptionComponent
    ],
    exports: [
        LeftOptionComponent
    ],
    imports: [
        CommonModule,
        AtomsModule,
    ]
})
export class MoleculesModule { }
