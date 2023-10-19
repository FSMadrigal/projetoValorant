import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { WeaponsService } from 'src/app/api/weapons.service';

@Component({
  selector: 'app-individual-weapon-page',
  templateUrl: './individual-weapon-page.component.html',
  styleUrls: ['./individual-weapon-page.component.scss']
})
export class IndividualWeaponPageComponent implements OnInit, AfterViewInit {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  individual_weapon: any;
  slider!: KeenSliderInstance;

  constructor(
    protected weaponService: WeaponsService,
    protected activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const weaponName = this.activatedRoute.params.subscribe(param => {
      this.individual_weapon = this.weaponService.getWeaponByName(param['nome_da_arma']);
    });
  }

  ngAfterViewInit() {
    const sliderConfig: any = {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 2,
        spacing: 30,
      }
    }
    this.slider = new KeenSlider(this.sliderRef.nativeElement, sliderConfig);
  }
}
