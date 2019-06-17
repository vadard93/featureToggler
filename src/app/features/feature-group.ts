import { Feature } from './feature';
export class FeatureGroup {
  constructor(public featureId: string, public name: string, public description: string, public status:string, public startDate:string, public endDate:string, public features: Feature[]) { }
}