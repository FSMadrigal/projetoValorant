import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeaponsService } from 'src/app/api/weapons.service';

@Component({
  selector: 'app-individual-weapon-page',
  templateUrl: './individual-weapon-page.component.html',
  styleUrls: ['./individual-weapon-page.component.scss']
})
export class IndividualWeaponPageComponent implements OnInit {
  individual_weapon: any;

  constructor(
    protected weaponService: WeaponsService,
    protected activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const weaponName = this.activatedRoute.params.subscribe(param => {
      this.individual_weapon = this.weaponService.getWeaponByName(param['nome_da_arma']);
    });
  }
}
