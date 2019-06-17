import { Component, OnInit, Input } from '@angular/core';
import {Feature} from './feature';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() features: Feature[];
  displayedColumns: string[] = ['service', 'status'];
  dataSource: Feature[];


  constructor() { }

  ngOnInit() {
    this.dataSource = this.features;
  }

  changeStatus(featureId: string, serviceId: string, event){
    alert(featureId);
      event.stopPropagation();
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


