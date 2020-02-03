import { TemoignageService } from './../../shared/services/temoignage.service';
import { Temoignage } from './../../shared/models/temoignage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-witness',
  templateUrl: './witness.component.html',
  styleUrls: ['./witness.component.scss']
})
export class WitnessComponent implements OnInit {

  temoignages: Temoignage[];

  constructor(private service: TemoignageService) { }

  ngOnInit() {
    this.service.getAllValidated().subscribe((data: Temoignage[]) => {
      this.temoignages = data;
    });

  }

}
