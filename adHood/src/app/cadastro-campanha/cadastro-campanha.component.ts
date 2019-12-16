import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-campanha',
  templateUrl: './cadastro-campanha.component.html',
  styleUrls: ['./cadastro-campanha.component.scss']
})
export class CadastroCampanhaComponent {

  private cliente: any  = {};

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    nome: [this.cliente.nome],
    segmento: [this.cliente.segmento],
    endereco: [this.cliente.asdf],
  });

}
