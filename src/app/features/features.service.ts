import { Injectable } from '@angular/core';
import { FeatureGroup} from './feature-group';
import {Observable} from 'rxjs';
import { of } from 'rxjs'

@Injectable()
export class FeaturesService {

  public featureGroupsStatic:FeatureGroup[] = [
    {
      featureId: '1',
      name: 'тест',
      description: 'test',
      status: 'Отключен',
      features: [
        {
          featureId: '1',
          serviceId: '2',
          service: 'Sales',
          status: 'Включен'
        }
      ]
    }
  ];

  public getFeatures():Observable<FeatureGroup[]>{
    return of(this.featureGroupsStatic);
  };

}