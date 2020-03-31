import { Component, OnInit } from '@angular/core';

export interface SearchModel {
  list1Value: string;
  list2Value: string;
  list3Value: string;
}

export interface SearchResults {
  list1: any[];
  list2: any[];
  list3: any[];
}

@Component({
  selector: 'app-selection-bug',
  templateUrl: './selection-bug.component.html',
  styleUrls: ['./selection-bug.component.css']
})
export class SelectionBugComponent implements OnInit {

  searchModel = {} as SearchModel;
  searchResults = {} as SearchResults;

  constructor() { }

  ngOnInit() {

    this.searchResults.list1 = [{ID: 1, NAME: 'one'}, {ID: 2, NAME: 'two'},
    {ID: 3, NAME: 'three'}];

    this.searchResults.list2 = [{ID: 4, NAME: 'four'}, {ID: 5, NAME: 'five'},
    {ID: 6, NAME: 'six'}];

    this.searchResults.list3 = [{ID: 7, NAME: 'seven'}, {ID: 8, NAME: 'eight'},
    {ID: 9, NAME: 'nine'}];
  }

}
