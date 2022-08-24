export const mapPropertyDetailFromApiToVm = (property, equipmentsLIst) => {
  return {
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    price: `${property.price.toLocaleString('de-DE')} €`,
    title: property.title,
    city: property.city,
    rooms: `${property.rooms} habitaciones`,
    squareMeter: `${property.squareMeter} metros cuadrados`,
    bathrooms: `${property.bathrooms} ${getBathroomText(property.rooms)}`,
    notes: property.notes,
    mainFeatures: property.mainFeatures,
    equipments: equipmentsLIst,
    locationUrl: property.locationUrl,
    images: property.images,
  };
};

const getBathroomText = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño';
};
