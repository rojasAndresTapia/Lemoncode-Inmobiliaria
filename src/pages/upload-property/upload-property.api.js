import Axios from 'axios';

const saleTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;
const provincesUrl = `${process.env.BASE_API_URL}/provinces`;
const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;
const propertyUrl = `${process.env.BASE_API_URL}/properties`;

export const getSaleTypeList = () =>
  Axios.get(`${saleTypesUrl}`).then((response) => {
    console.log('saleTypeLilstApi', response.data);
    return response.data;
  });

export const getProvinceList = () =>
  Axios.get(`${provincesUrl}`).then((response) => {
    console.log('provinceListApi', response.data);
    return response.data;
  });

export const getEquipmentList = () =>
  Axios.get(`${equipmentsUrl}`).then((response) => {
    console.log('equipmentListApi', response.data);
    return response.data;
  });

export const insertProperty = (property) =>
  Axios.post(`${propertyUrl}`, property).then((response) => {
    return response.data;
  });
