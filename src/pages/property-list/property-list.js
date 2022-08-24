import {
  getPropertyList,
  getSalesTypesList,
  getProvincesList,
} from './property-list.api';
import {
  mapPropertyListFromApiToVm,
  mapFilterToQueryParams,
} from './property-list.mappers';
import {
  addPropertyRows,
  setOptions,
  clearPropertyRows,
} from './property-list.helpers';
import {
  roomOptions,
  bathroomOptions,
  minPriceOptions,
  maxPriceOptions,
} from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

Promise.all([getPropertyList(), getSalesTypesList(), getProvincesList()]).then(
  ([propertyList, salesTypesList, provincesList]) => {
    // const [propertyList, salesTypesList, provincesList] = resultList;
    loadPropertyList(propertyList);
    setOptions(salesTypesList, 'select-sale-type', 'Tipo de venta');
    setOptions(provincesList, 'select-province', 'Provincia');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Baños?');
    setOptions(minPriceOptions, 'select-min-price', '¿Precio mínimo?');
    setOptions(maxPriceOptions, 'select-max-price', '¿Precio máximo?');
  }
);

const loadPropertyList = (propertyList) => {
  const viewModelPropertyList = mapPropertyListFromApiToVm(propertyList);
  addPropertyRows(viewModelPropertyList);
};

let filter = {
  saleTypeId: '',
  provinceId: '',
  minRooms: '',
  minBathrooms: '',
  minPrice: '',
  maxPrice: '',
};

onUpdateField('select-sale-type', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    saleTypeId: value,
  };
});
onUpdateField('select-province', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    provinceId: value,
  };
});
onUpdateField('select-room', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minRooms: value,
  };
});
onUpdateField('select-bathroom', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minBathrooms: value,
  };
});
onUpdateField('select-min-price', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minPrice: value,
  };
});
onUpdateField('select-max-price', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    maxPrice: value,
  };
  console.log('filter price', filter);
});

onSubmitForm('search-button', () => {
  const queryParams = mapFilterToQueryParams(filter);
  getPropertyList(queryParams).then((propertyList) => {
    clearPropertyRows();
    loadPropertyList(propertyList);
  });
});
