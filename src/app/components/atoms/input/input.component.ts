import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() iconClass:string = "fa-solid fa-magnifying-glass";
  @Input() placeholder:string = "This is it";
}
