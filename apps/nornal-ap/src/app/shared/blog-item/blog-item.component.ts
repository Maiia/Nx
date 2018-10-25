import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'NXworkspace-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})

export class BlogItemComponent implements OnInit {
  @Input() post: {};

  constructor() { }

  ngOnInit() {
  }

}
