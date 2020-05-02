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
        urlImagem: 'https://images-na.ssl-images-amazon.com/images/I/518KHHZ76fL._SX336_BO1,204,203,200_.jpg',
        titulo: 'Diário de um Banana',
        descricaoCurta: 'Livro do gênero Infanto-juvenil, Comédia, Aventura e Romance.',
        descricaoCompleta: 'Baseia-se num garoto que no seu dia-a-dia tem que lidar com os seus irmãos Rodrick e Manny, os seus pais e a escola. Para além disso tem o desejo de se tornar famoso e popular.',
        valor: 'R$ 29,90',
      },

      {
        id: 2,
        urlImagem: 'https://images-americanas.b2w.io/produtos/imagens/179547/179548_1GG.jpg',
        titulo: 'Harry Potter e a Pedra Filosofal',
        descricaoCurta: 'Livro de romance de fantasia.',
        descricaoCompleta: 'Narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.',
        valor: 'R$ 59,90',
      },

      {
        id: 3,
        urlImagem: 'https://www.extra-imagens.com.br/livros/LiteraturaNacional/literaturaRomance/172414/5826038/L-PM-Pocket-O-Cortico-Aluisio-Azevedo-172414.jpg',
        titulo: 'O Cortiço',
        descricaoCurta: 'Livro de Romance',
        descricaoCompleta: 'Publicado em 1890, denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX.',
        valor: 'R$ 69,90',
      },

      {
        id: 4,
        urlImagem: 'https://abrilguiadoestudante.files.wordpress.com/2016/12/pijama-listrado2.jpg?quality=100&strip=info&w=289&h=289',
        titulo: 'O Menino do Pijama Listrado',
        descricaoCurta: 'Livro infanto-juvenil',
        descricaoCompleta: 'A história tem como pano de fundo os acontecimentos em Auschwitz, durante a Segunda Guerra Mundial e o Holocausto.',
        valor: 'R$ 69,90',
      },

      {
        id: 5,
        urlImagem: 'https://www.atelie.com.br/site/wp-content/uploads/2016/02/Iracema3a_ed.jpg',
        titulo: 'Iracema',
        descricaoCurta: 'Livro de Romance',
        descricaoCompleta: 'A história é uma representação do que aconteceu com a América na época de colonização européia.',
        valor: 'R$ 49,90',
      },

      {
        id: 6,
        urlImagem: 'https://www.pontofrio-imagens.com.br/livros/LiteraturaNacional/literaturaRomance/174219/5899070/A-Escrava-Isaura-Bernardo-Guimaraes-174219.jpg',
        titulo: 'Escrava Isaura',
        descricaoCurta: 'Romance Brasileiro',
        descricaoCompleta: 'O livro conta a história de Isaura, uma escrava mulata, filha de um português miguelista e de uma escrava que morre quando Isaura nasce, que é educada pela senhora da casa como se de uma filha se tratasse.',
        valor: 'R$ 49,90',
      }

    ];

  }

}
