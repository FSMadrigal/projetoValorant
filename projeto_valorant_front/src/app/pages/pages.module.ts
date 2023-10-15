import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { WeaponsPageComponent } from './weapons-page/weapons-page.component';
import { ComponentsModule } from '../shared/components/components.module';
import { IndividualWeaponPageComponent } from './individual-weapon-page/individual-weapon-page.component';
import { Ng2FittextModule } from 'ng2-fittext';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WeaponsPageComponent,
    IndividualWeaponPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    Ng2FittextModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
