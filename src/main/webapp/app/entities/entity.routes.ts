import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categoria',
    data: { pageTitle: 'gatewayApp.serviceCategoria.home.title' },
    loadChildren: () => import('./service/categoria/categoria.routes'),
  },
  {
    path: 'orcamento',
    data: { pageTitle: 'gatewayApp.serviceOrcamento.home.title' },
    loadChildren: () => import('./service/orcamento/orcamento.routes'),
  },
  {
    path: 'transacao',
    data: { pageTitle: 'gatewayApp.serviceTransacao.home.title' },
    loadChildren: () => import('./service/transacao/transacao.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
