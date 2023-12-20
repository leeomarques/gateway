import { IOrcamento, NewOrcamento } from './orcamento.model';

export const sampleWithRequiredData: IOrcamento = {
  id: 17614,
  ano: 31550,
  mes: 'ugh concrete biosphere',
};

export const sampleWithPartialData: IOrcamento = {
  id: 16095,
  ano: 21691,
  mes: 'taunt unlike supposing',
};

export const sampleWithFullData: IOrcamento = {
  id: 13950,
  ano: 948,
  mes: 'huzzah demarcate voluntarily',
};

export const sampleWithNewData: NewOrcamento = {
  ano: 7560,
  mes: 'yet precede consequently',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
