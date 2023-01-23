import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PhotoComponent } from './photo/photo.component';
import { TextComponent } from './text/text.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    PhotoComponent,
    TextComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    PhotoComponent,
    TextComponent,
    InputComponent
    
  ]
})
export class AtomsModule { }
