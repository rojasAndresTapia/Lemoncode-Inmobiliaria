import {
  setCheckboxList,
  setOptionList,
  onAddFeature,
  onRemoveFeature,
  onAddImage,
} from './upload-property.helpers';
import {
  getSaleTypeList,
  getProvinceList,
  getEquipmentList,
  insertProperty,
} from './upload-property.api';
import { getPropertyList } from '../property-list/property-list.api';
import { onUpdateField, onSubmitForm, onAddFile } from '../../common/helpers';

let newProperty = {
  id: '',
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypes: [],
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: [],
  equipmentIds: [],
  images: [],
};

let features = [];

const setSaleTypesEvent = (list) => {
  for (let i = 0; i < list.length; i++) {
    // console.log('checkbox', list[i].id);
    let inputValue = list[i].id;
    let name = list[i].name;
    let id = `${inputValue}-${name}`;
    // console.log('id', id);
    onUpdateField(id, (event) => {
      const value = event.target.value;
      const isChecked = event.target.checked;
      // console.log('valor', event.target.checked);
      isChecked
        ? newProperty.saleTypes.push(value)
        : newProperty.saleTypes.splice(
            newProperty.saleTypes.indexOf(value),
            value
          );
      // console.log('newProperty.saleTypes', newProperty.saleTypes);
    });
  }
};

const setEquipmentsEvent = (list) => {
  for (let i = 0; i < list.length; i++) {
    // console.log('checkbox', list[i].id);
    let inputValue = list[i].id;
    let name = list[i].name;
    let id = `${inputValue}-${name}`;
    // console.log('id', id);
    onUpdateField(id, (event) => {
      const value = event.target.value;
      const isChecked = event.target.checked;
      // console.log('valor', event.target.checked);
      isChecked
        ? newProperty.equipmentIds.push(value)
        : newProperty.equipmentIds.splice(
            newProperty.equipmentIds.indexOf(value),
            value
          );
      // console.log('newProperty.equipments', newProperty.equipments);
    });
  }
};

Promise.all([getSaleTypeList(), getProvinceList(), getEquipmentList()]).then(
  ([saleTypeList, provinceList, equipmentList]) => {
    setCheckboxList(saleTypeList, 'saleTypes');
    setSaleTypesEvent(saleTypeList);
    setCheckboxList(equipmentList, 'equipments');
    setEquipmentsEvent(equipmentList);
    setOptionList(provinceList, 'province');
  }
);

onUpdateField('title', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, title: value };
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, notes: value };
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, email: value };
});

onUpdateField('phone', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, phone: value };
});

onUpdateField('price', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, price: value };
});

onUpdateField('address', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, address: value };
});

onUpdateField('city', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, city: value };
});

onUpdateField('province', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, province: value };
});

onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, squareMeter: value };
});

onUpdateField('rooms', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, rooms: value };
});

onUpdateField('bathrooms', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, bathrooms: value };
});

onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, locationUrl: value };
});

onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value;
  newProperty = {
    ...newProperty,
    mainFeatures: [...newProperty.mainFeatures, value],
  };
  onAddFeature(value);
  getDeleteButtonId(newProperty.mainFeatures);
});

const getDeleteButtonId = (featureList) => {
  let id = '';
  for (const element of featureList) {
    id = `delete-${element}`;
    onSubmitForm(id, () => {
      newProperty.mainFeatures.splice(
        newProperty.mainFeatures.indexOf(element),
        1
      );
      onRemoveFeature(element);
    });
  }
};

const getNewPropertyId = () => {
  getPropertyList().then((res) => {
    console.log('lista', res.length);
    newProperty.id = res.length + 1;
  });
};

getNewPropertyId();

onAddFile('add-image', (event) => {
  const value = event;
  onAddImage(value);
  newProperty = {
    ...newProperty,
    images: [...newProperty.images, value],
  };
  console.log('valueImage', newProperty);
});

onSubmitForm('save-button', () => {
  console.log('newProperty', newProperty);
  insertProperty(newProperty).then(() => {
    history.back();
  });
});
