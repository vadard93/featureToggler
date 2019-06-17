import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
 displayedColumns: string[] = ['service', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  service: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {service: "Sales", status: 'Включен',},
  {service: "Avatars", status: 'Отключен',},
  {service: "SalesStatistics", status: 'Отключен',},
];


