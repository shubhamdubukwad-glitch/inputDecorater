import { Component, Input, OnInit } from '@angular/core';
import { IpostArr } from '../../modules/postinterface';

@Component({
  selector: 'app-post-child',
  templateUrl: './post-child.component.html',
  styleUrls: ['./post-child.component.scss']
})
export class PostChildComponent implements OnInit {
@Input() postArr!:IpostArr[];
  constructor() { }

  ngOnInit(): void {
  }

}
