import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns = ['MatchID', 'Date', 'Time', 'Venue', 'Team1', 'Team2', 'Points', 'WT', 'Ratio', 'Sachin', 'Amit', 'Indu', 'Satish', 'Vijay', 'Rakesh', 'Rakshitha', 'Pawan', 'Divya', 'Viji', 'Selvi', 'Vivek'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  MatchID: string;
  Date: string;
  Time: string;
  Venue: string;
  Team1: string;
  Team2: string;
  Points: number;
  WT: string;
  Ratio: number;
  Sachin: number; 
  Amit: number; 
  Indu: number; 
  Satish: number; 
  Vijay: number; 
  Rakesh: number; 
  Rakshitha: number; 
  Pawan: number; 
  Divya: number; 
  Viji: number; 
  Selvi: number; 
  Vivek: number;
}

const ELEMENT_DATA: Element[] = [
  {MatchID: '7AprM1', Date: '7-Apr', Time: '8 PM', Venue: 'Mumbai', Team1: 'MI', Team2: 'CSK', Points: 10, WT: 'MI', Ratio: 10, Sachin: 100, Amit: 39, Indu: 78, Satish: 69, Vijay: 120, Rakesh: 133, Rakshitha: 145, Pawan: 178, Divya: 188, Viji: 20, Selvi: 33, Vivek: 55},
  {MatchID: '8AprM1', Date: '8-Apr', Time: '4 PM', Venue: 'Delhi', Team1: 'DD', Team2: 'KXIP', Points: 10, WT: 'MI', Ratio: 10, Sachin: 100, Amit: 39, Indu: 78, Satish: 69, Vijay: 120, Rakesh: 133, Rakshitha: 145, Pawan: 178, Divya: 188, Viji: 20, Selvi: 33, Vivek: 55},
  {MatchID: '8AprM1', Date: '8-Apr', Time: '8 PM', Venue: 'Kolkata', Team1: 'KKR', Team2: 'RCB', Points: 10, WT: 'MI', Ratio: 10, Sachin: 100, Amit: 39, Indu: 78, Satish: 69, Vijay: 120, Rakesh: 133, Rakshitha: 145, Pawan: 178, Divya: 188, Viji: 20, Selvi: 33, Vivek: 55},
  {MatchID: '9AprM1', Date: '9-Apr', Time: '8 PM', Venue: 'Hydarabad', Team1: 'SRH', Team2: 'RR', Points: 10, WT: 'MI', Ratio: 10, Sachin: 100, Amit: 39, Indu: 78, Satish: 69, Vijay: 120, Rakesh: 133, Rakshitha: 145, Pawan: 178, Divya: 188, Viji: 20, Selvi: 33, Vivek: 55},

];


// example PR to understand update table code.
// https://github.com/angular/material2/pull/5093/files#diff-c1ec89e4af8478366236f952652bfaf1R16


// update table : 
// https://github.com/marinantonio/angular-mat-table-crud


