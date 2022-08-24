import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

const salesTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;

const provincesUrl = `${process.env.BASE_API_URL}/provinces`;

export const getPropertyList = (queryParams) =>
  Axios.get(`${url}?${queryParams}`).then((response) => {
    return response.data;
  });

export const getSalesTypesList = () =>
  Axios.get(salesTypesUrl).then((response) => {
    return response.data;
  });

export const getProvincesList = () =>
  Axios.get(provincesUrl).then((response) => {
    return response.data;
  });
