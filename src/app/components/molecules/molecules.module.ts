import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { LeftOptionComponent } from './left-option/left-option.component';
import { RightOptionComponent } from './right-option/right-option.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ChatboxComponent } from './chatbox/chatbox.component';



@NgModule({
    declarations: [
        LeftOptionComponent,
        RightOptionComponent,
        ContactSearchComponent,
        ChatboxComponent
    ],
    exports: [
        LeftOptionComponent,
        RightOptionComponent,
        ContactSearchComponent,
        ChatboxComponent
    ],
    imports: [
        CommonModule,
        AtomsModule,
    ]
})
export class MoleculesModule { }
