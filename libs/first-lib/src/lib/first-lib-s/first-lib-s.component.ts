import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mylib-first-lib-s',
  templateUrl: './first-lib-s.component.html',
  styleUrls: ['./first-lib-s.component.css']
})
export class FirstLibSComponent implements OnInit {
  constructor() {
    console.log(321);
  }

  ngOnInit() {
    console.log(321);
  }
}
