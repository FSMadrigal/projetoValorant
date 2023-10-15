import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponsPageComponent } from './weapons-page/weapons-page.component';
import { IndividualWeaponPageComponent } from './individual-weapon-page/individual-weapon-page.component';

const routes: Routes = [
  {
    path: 'armas',
    component: WeaponsPageComponent
  },
  {
    path: 'arma/:nome_da_arma',
    component: IndividualWeaponPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
