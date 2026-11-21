import { Component, OnInit } from '@angular/core';
import { ImobileArr } from '../../modules/mobileinterface';
import { mobileArr } from '../../const/mobile';

@Component({
  selector: 'app-mobile-dasbord',
  templateUrl: './mobile-dasbord.component.html',
  styleUrls: ['./mobile-dasbord.component.scss']
})
export class MobileDasbordComponent implements OnInit {
mobileArr:Array<ImobileArr>=mobileArr
  constructor() { }

  ngOnInit(): void {
  }

}
