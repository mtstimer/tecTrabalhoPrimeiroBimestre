import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {

    this.produtos = [

      {
        id: 1,
        urlImagem: 'https://www.instagram.com/p/B-DOAsUgH35/media/?size=m',
        titulo: 'Quico com vid 19',
        descricaoCurta: 'Ilustração em técnica mista e papel 180g.',
        descricaoCompleta: '',
        valor: 'R$ 49,90',
      },

      {
        id: 2,
        urlImagem: 'https://www.instagram.com/p/B9-DyLkgCsx/media/?size=m',
        titulo: 'Quarentena',
        descricaoCurta: 'Ilustração em aquarela e papel 300g.',
        descricaoCompleta: '',
        valor: 'R$ 259,90',
      },

      {
        id: 3,
        urlImagem: 'https://www.instagram.com/p/B9_ufX5AzDV/media/?size=m',
        titulo: 'Vô Verine com gripe',
        descricaoCurta: 'Ilustração em técnica realista, lápis de grafite e papel 180g.',
        descricaoCompleta: '',
        valor: 'R$ 129,90',
      },

      {
        id: 4,
        urlImagem: 'https://www.instagram.com/p/B9-FVdqg8vD/media/?size=m',
        titulo: 'Grace Kelly the COVID princess',
        descricaoCurta: 'Ilustração em técnica realista, lápis de grafite e papel 180g.',
        descricaoCompleta: '',
        valor: 'R$ 129,90',
      },

      {
        id: 5,
        urlImagem: 'https://www.instagram.com/p/B9-E06ggOxs/media/?size=m',
        titulo: 'Kianu? 2020',
        descricaoCurta: 'Ilustração de técnica mista em papel 180g',
        descricaoCompleta: '',
        valor: 'R$ 89,90',
      },

      {
        id: 6,
        urlImagem: 'https://www.instagram.com/p/B9-MEx0Auvh/media/?size=m',
        titulo: 'Mr. Feijão',
        descricaoCurta: 'Ilustração de técnica mista em papel 180g',
        descricaoCompleta: '',
        valor: 'R$ 49,90',
      }

    ];

  }

}
