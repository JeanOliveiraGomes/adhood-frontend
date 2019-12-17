import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClienteEntity } from '../entidades/clienteEntity';
import { PessoaService } from '../services/pessoaService/pessoa.service';
import { ClienteService } from '../services/cienteService/cliente.service';
import { EnderecoEntity } from '../entidades/enderecoEntity';

@Component({
  selector: 'app-cadastro-campanha',
  templateUrl: './cadastro-campanha.component.html',
  styleUrls: ['./cadastro-campanha.component.scss']
})
export class CadastroCampanhaComponent {
  private keyword = 'nome';

  private form: FormGroup;

  private cliente: ClienteEntity = new ClienteEntity();
  private endereco: EnderecoEntity = new EnderecoEntity();

  private consultores = [];

  constructor(private fb: FormBuilder, private pessoaService: PessoaService, private clienteService: ClienteService) {
    this.buildForm();
  }

public buildForm(){
  this.form = this.fb.group({
    nome: [this.cliente.nome, [Validators.required]],
    segmento: [this.cliente.segmento],
    bairro: [this.endereco.bairro],
    cep: [this.endereco.cep],
    complemento: [this.endereco.complemento],
    consultor: [this.cliente.consultor],
    uf: [this.endereco.uf],
    status: [this.cliente.status],
    porte: [this.cliente.porte]
  });

}

  private onChangeSearch(event) {
    console.log(event);
    this.pessoaService.findByNome(event).subscribe(data => {
      this.consultores = data;
    }, error => {
      alert(error.error.message);
    });
  }

  private onSubmit(event) {
    this.cliente.endereco.push(this.endereco);
    this.clienteService.save(this.cliente).subscribe(data => {

    });
  }

}
