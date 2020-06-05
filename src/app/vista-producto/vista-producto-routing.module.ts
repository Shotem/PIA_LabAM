import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaProductoPage } from './vista-producto.page';

const routes: Routes = [
  {
    path: '',
    component: VistaProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaProductoPageRoutingModule {}
