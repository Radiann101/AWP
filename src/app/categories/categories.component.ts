import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.categories= [
      'Home',
      'Articles',
      'Forums',
      'Videos',
      'Patch notes',
      'More',
    ];
  }

}
