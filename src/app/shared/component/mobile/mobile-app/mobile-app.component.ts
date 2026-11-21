import { Component, Input, OnInit } from '@angular/core';
import { ImobileArr } from '../../modules/mobileinterface';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.scss']
})
export class MobileAppComponent implements OnInit {
@Input() mobileArr!:ImobileArr[]
  constructor() { }

  ngOnInit(): void {
  }

}
