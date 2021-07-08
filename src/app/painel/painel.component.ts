import { Component, OnInit } from '@angular/core';
import { FRASES } from '../mocks/frases-mocks';
import { Frase } from '../models/frases.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Traduza a frase:'
  public frases: Frase[] = FRASES;
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase = {fraseEng: '', frasePtBr: ''}

  constructor() { 
    this.atualizarRodada();
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void{
    if(this.resposta === this.rodadaFrase.frasePtBr){
      this.rodada++;

      
    }
  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
