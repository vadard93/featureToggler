import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.css']
})
export class FeatureEditComponent implements OnInit {

  featureId: string;
  featureName: string;
  featureDescription:string;

  constructor(private activateRoute: ActivatedRoute) { 

    this.featureId = activateRoute.snapshot.params['featureid'];
    this.featureName="TransferByLastRecognized";
    this.featureDescription = 'Перевод диалога на группу, соответствующую последнему распознанному вопросу в этом диалоге';
  }

  ngOnInit() {
  }

}