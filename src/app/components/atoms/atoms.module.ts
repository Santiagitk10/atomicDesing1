import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PhotoComponent } from './photo/photo.component';
import { UserNameComponent } from './user-name/user-name.component';
import { TextComponent } from './text/text.component';



@NgModule({
  declarations: [
    ButtonComponent,
    PhotoComponent,
    UserNameComponent,
    TextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    PhotoComponent
  ]
})
export class AtomsModule { }
