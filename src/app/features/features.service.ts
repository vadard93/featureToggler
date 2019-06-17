import { Injectable } from '@angular/core';
import { FeatureGroup} from './feature-group';
import {Observable} from 'rxjs';
import { of } from 'rxjs'

@Injectable()
export class FeaturesService {

  public featureGroupsStatic:FeatureGroup[] = [
    {
      featureId: '1',
      name: 'TransferByLastRecognized',
      description: 'Перевод диалога на группу, соответствующую последнему распознанному вопросу в этом диалоге',
      status: 'Отключен',
      features: [
        {
          featureId: '1',
          serviceId: '2',
          service: 'Sales',
          status: 'Включен'
        },
        {
          featureId: '1',
          serviceId: '3',
          service: 'Portal',
          status: 'Включен'
        }
      ]
    },
    {
      featureId: '2',
      name: 'OfferWebPush',
      description: 'Показывать ли попап с предложением включить веб пуши',
      status: 'Отключен',
      features: [
        {
          featureId: '2',
          serviceId: '2',
          service: 'Sales',
          status: 'Включен'
        },
        {
          featureId: '2',
          serviceId: '3',
          service: 'Portal',
          status: 'Включен'
        }
      ]
    }
  ];

  public getFeatures():Observable<FeatureGroup[]>{
    return of(this.featureGroupsStatic);
  };

}