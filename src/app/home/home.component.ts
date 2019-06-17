import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../features/features.service';
import { FeatureGroup} from '../features/feature-group';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public featureGroups:FeatureGroup[];
  constructor(private _featureService: FeaturesService, private router: Router){
  
  }
   ngOnInit(){

      this._featureService.getFeatures().subscribe(data=> this.featureGroups = data);

   }

   edit(featureId: string, event){
    // this.router.navigate(['/edit',{featureId: featureId}]);
    
      event.stopPropagation();
   }

   changeStatus(featureId:string, event){
     alert(featureId);
      event.stopPropagation();
   }

}