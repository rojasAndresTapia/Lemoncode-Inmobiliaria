import { getEquipmentsList } from './property-detail.api';
export const mapPropertyDetailFromApiToVm = (property, equipments) => {
  return {
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    price: property.price,
    title: property.title,
    city: property.city,
    rooms: property.rooms,
    squareMeter: property.squareMeter,
    bathrooms: `${property.bathrooms} ${getBathroomText(property.rooms)}`,
    notes: property.notes,
    mainFeatures: property.mainFeatures,
    equipments: equipments,
    locationUrl: property.locationUrl,
    images: property.images,
  };
};

const getBathroomText = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño';
};
