import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaProductoPageRoutingModule } from './vista-producto-routing.module';

import { VistaProductoPage } from './vista-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaProductoPageRoutingModule
  ],
  declarations: [VistaProductoPage]
})
export class VistaProductoPageModule {}
