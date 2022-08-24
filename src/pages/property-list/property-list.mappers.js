export const mapPropertyListFromApiToVm = (propertyList) => {
  return propertyList.map((property) => mapPropertyFromApiToVm(property));
};

const mapPropertyFromApiToVm = (property) => {
  return {
    id: property.id,
    title: property.title,
    rooms: `${property.rooms} ${getRooms(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    notes: `${property.notes.substring(0, 240)}...`,
    price: `${property.price.toLocaleString()} €`,
    image: Array.isArray(property.images) ? property.images[0] : '',
  };
};

const getRooms = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitación';
};

// Github filters:
// https://github.com/typicode/json-server#filter

export const mapFilterToQueryParams = (filter) => {
  let queryParams = '';
  if (filter.salesTypeId) {
    queryParams = `${queryParams}salesTypeId_like=${filter.salesTypeId}&`;
  }
  if (filter.provinceId) {
    queryParams = `${queryParams}provinceId=${filter.provinceId}&`;
  }
  if (filter.minRooms) {
    queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
  }
  if (filter.minBathrooms) {
    queryParams = `${queryParams}bathrooms_gte=${filter.minBathrooms}&`;
  }
  if (filter.minPrice) {
    queryParams = `${queryParams}price_gte=${filter.minPrice}&`;
  }
  if (filter.maxPrice) {
    queryParams = `${queryParams}price_lte=${filter.maxPrice}&`;
  }

  return queryParams.slice(0, -1);
};
