import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel-card',
  templateUrl: './painel-card.component.html',
  styleUrls: ['./painel-card.component.css']
})
export class PainelCardComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
