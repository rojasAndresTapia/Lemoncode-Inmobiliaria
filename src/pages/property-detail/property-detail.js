import { history } from '../../core/router/history';
import { getPropertyDetail } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyDetailFromApiToVm } from './property-detail.mappers';
import { getEquipments, getEquipmentsList } from './property-detail.api';

let property = {
  title: '',
  notes: '',
  city: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: '',
  equipments: [],
  images: '',
};

const params = history.getParams();
const isId = Boolean(params.id);

getPropertyDetail(params.id).then((apiPropertyDetail) => {
  console.log('apiPropertyDetail', apiPropertyDetail);
  property = apiPropertyDetail;
  return apiPropertyDetail;
});

getEquipmentsList().then((lista) => {
  getEquipments(params.id).then((data) => {
    let dataMap = Object.assign(...data.map((d) => ({ [d[0]]: d[0] })));
    property.equipments = lista
      .filter((elem) => elem.id === dataMap[elem.id])
      .map((elem) => elem.name);
    console.log('equipments', property.equipments);
    return property.equipments;
  });
});
console.log(property.equipments);

if (isId) {
  Promise.all([getPropertyDetail(), getEquipmentsList()]).then(
    (property, equipments) => {
      console.log('property and equipments', property, equipments);
      setPropertyValues(property);
      console.log('property', property);
    }
  );
}
