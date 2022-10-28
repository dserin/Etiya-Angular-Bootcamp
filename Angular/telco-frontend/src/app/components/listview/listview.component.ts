import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
    categories: string[] = [];
    constructor() { }

  ngOnInit(): void {
  }
  getCategories() {
    this.categories=["giyim","ayakkabı"]
  }
}
