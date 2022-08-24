import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
const equipmentUrl = `${process.env.BASE_API_URL}/equipments`;

export const getPropertyDetail = (propertyId) =>
  Axios.get(`${url}/${propertyId}`).then((response) => {
    const propertyList = response.data;
    return propertyList;
  });

export const getEquipments = (propertyId) =>
  Axios.get(`${url}`).then((response) => {
    const propertyEquipments = response.data[propertyId - 1].equipmentIds;
    return propertyEquipments;
  });

export const getEquipmentsList = () =>
  Axios.get(`${equipmentUrl}`).then((response) => {
    const equipmentsList = response.data;
    return equipmentsList;
  });
