import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.sass']
})
export class MainHeaderComponent implements OnInit {

  public mobileMenuOpened = false;

  constructor() { }

  ngOnInit() {
  }

}
