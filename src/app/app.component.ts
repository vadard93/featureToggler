import { Component, OnInit } from '@angular/core';
import { FeaturesService } from './features/features.service';
import { FeatureGroup} from './features/feature-group';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  public featureGroups:FeatureGroup[];
  constructor(private _featureService: FeaturesService){
  
  }
   ngOnInit(){

      this._featureService.getFeatures().subscribe(data=> this.featureGroups = data);

   }

   edit(featureId: string, event){
     alert(featureId);
      event.stopPropagation();
   }

   changeStatus(featureId:string, event){
     alert(featureId);
      event.stopPropagation();
   }
}
