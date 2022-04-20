import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel-card',
  templateUrl: './painel-card.component.html',
  styleUrls: ['./painel-card.component.css']
})
export class PainelCardComponent implements OnInit {

  @Input() pokemon: any;



  // url = 'http://127.0.0.1:8000/public/00114320220414625766bfce9b3.png';
  url = 'http://localhost:8000/storage/app/img_pokemons/00251620220420625f52ec94e3e.png';

  constructor() { }

  ngOnInit(): void {
  }

}
