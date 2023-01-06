import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})

export class RecapComponent {
  
  @Input() title : string = "";
  @Input() firstName : string = "";
  @Input() lastName : string = "";
  @Input() email : string = "";
  @Input() postalCode : string = "";
  @Input() city : string = "";
  @Input() country : string = "";
  @Input() adress : string = "";
  @Input() phone : string = "";
  @Input() login : string = "";
  @Input() password : string = "";

}