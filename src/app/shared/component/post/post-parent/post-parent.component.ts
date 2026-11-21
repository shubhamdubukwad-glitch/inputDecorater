import { Component, OnInit } from '@angular/core';
import { IpostArr } from '../../modules/postinterface';
import { postArr } from '../../const/post';

@Component({
  selector: 'app-post-parent',
  templateUrl: './post-parent.component.html',
  styleUrls: ['./post-parent.component.scss']
})
export class PostParentComponent implements OnInit {
 
  postArr:Array<IpostArr>=postArr
  constructor() { }

  ngOnInit(): void {
  }

}
