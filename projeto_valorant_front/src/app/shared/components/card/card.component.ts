import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() weapon: any;
  @Input() size: 'small' | 'large' = 'large';

  constructor(
    private router: Router
  ) {}

  goToIndividualWeaponPage() {
    this.router.navigate(['pages', 'arma', this.weapon.name]);
  }
}
