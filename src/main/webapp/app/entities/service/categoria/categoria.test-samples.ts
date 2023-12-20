import { ICategoria, NewCategoria } from './categoria.model';

export const sampleWithRequiredData: ICategoria = {
  id: 12899,
  nome: 'ew knife grandpa',
  tipo: 'aboard',
};

export const sampleWithPartialData: ICategoria = {
  id: 30699,
  nome: 'incidentally fake geez',
  tipo: 'instead alive untidy',
};

export const sampleWithFullData: ICategoria = {
  id: 3758,
  nome: 'ick colonial misconceive',
  tipo: 'upon careless revolving',
};

export const sampleWithNewData: NewCategoria = {
  nome: 'crooked',
  tipo: 'huzzah with shade',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
