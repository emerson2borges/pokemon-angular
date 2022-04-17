import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  pokemon: any;

  pokemons = [
    {
      id: 1,
      nome: 'Bubassauro',
      descricao: 'Breve descricao do bubassauro',
      image: '../../assets/images/bubassauro.jpg'
    },
    {
      id: 2,
      nome: 'Ivyssauro',
      descricao: 'Breve descricao do ivyssauro',
      image: '../../assets/images/ivyssauro.jpg'
    },
    {
      id: 1,
      nome: 'Venussauro',
      descricao: 'Breve descricao do venussauro',
      image: '../../assets/images/venussauro.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
