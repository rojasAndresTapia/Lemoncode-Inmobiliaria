import { Validators, createFormValidation } from '@lemoncode/fonk';
const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    phone: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(6|7|9)\d{8}$/ },
        message: 'Teléfono no válido',
      },
    ],
    price: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    salesTypes: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    adress: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    adress: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    city: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    province: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    squareMeter: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    rooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    bathrooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    locationUrl: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    mainFeatures: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    equipmentIds: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
        customArgs: { minLength: 1 },
      },
    ],
    images: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
        customArgs: { minLength: 1 },
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
