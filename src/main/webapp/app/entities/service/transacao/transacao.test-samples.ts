import { ITransacao, NewTransacao } from './transacao.model';

export const sampleWithRequiredData: ITransacao = {
  id: 6206,
  valor: 15283.34,
};

export const sampleWithPartialData: ITransacao = {
  id: 14753,
  valor: 8399.34,
};

export const sampleWithFullData: ITransacao = {
  id: 26446,
  valor: 29326.71,
};

export const sampleWithNewData: NewTransacao = {
  valor: 18124.05,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
