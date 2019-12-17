import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteEntity } from '../entidades/clienteEntity';

@Component({
  selector: 'app-cadastro-campanha',
  templateUrl: './cadastro-campanha.component.html',
  styleUrls: ['./cadastro-campanha.component.scss']
})
export class CadastroCampanhaComponent {

  private cliente: ClienteEntity = new ClienteEntity();

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    nome: [this.cliente.nome, Validators.required],
    segmento: [this.cliente.segmento],
    bairro: [this.cliente.endereco.bairro],
    cep: [this.cliente.endereco.cep],
    complemento: [this.cliente.endereco.complemento],
    uf: [this.cliente.endereco.uf],
    status: [this.cliente.status],
    porte: [this.cliente.porte]
  });

  private onSubmit() {

  }

}
