import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feature-status',
  templateUrl: './feature-status.component.html',
  styleUrls: ['./feature-status.component.css']
})
export class FeatureStatusComponent implements OnInit {

   featureId: string;
   serviceId: string;

  constructor(private activateRoute: ActivatedRoute) { 

    this.featureId = activateRoute.snapshot.params['featureid'];
     this.serviceId = activateRoute.snapshot.params['serviceid'];
  }

  ngOnInit() {
  }

}