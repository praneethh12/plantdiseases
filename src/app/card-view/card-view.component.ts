import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent {

  @Input() imgsrc : string = '';
  @Input() disease_name : string = '';
  @Input() disease_about : string = ''

}
