import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeaponsService } from 'src/app/api/weapons.service';

@Component({
  selector: 'app-weapons-page',
  templateUrl: './weapons-page.component.html',
  styleUrls: ['./weapons-page.component.scss']
})
export class WeaponsPageComponent implements OnInit {
  weapons: any[] = [];
  searchField: FormControl = new FormControl('');

  constructor(protected weaponService: WeaponsService) { }

  ngOnInit(): void {
    this.weapons = this.weaponService.getAllWeapons();
    this.searchField.valueChanges.subscribe(fieldValue => {
      this.weapons = this.weaponService.filterAllWeaponsByNameWeaponCollection(fieldValue);
    })
  }
}
