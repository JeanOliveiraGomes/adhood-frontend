import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteEntity } from '../entidades/clienteEntity';
import { EnderecoEntity } from '../entidades/enderecoEntity';
import { PessoaService } from '../services/pessoaService/pessoa.service';
import { ClienteService } from '../services/cienteService/cliente.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent {

  private keyword = 'nome';

  private form: FormGroup;

  private cliente: ClienteEntity = new ClienteEntity();
  private endereco: EnderecoEntity = new EnderecoEntity();

  private consultores = [];

  private clienteList: ClienteEntity[] = [];

  constructor(private fb: FormBuilder,
              private pessoaService: PessoaService, private clienteService: ClienteService) {
    this.buildForm();
    this.popularClientes();
  }

public buildForm() {
  this.form = this.fb.group({
    nome: [this.cliente.nome, [Validators.required]],
    segmento: [this.cliente.segmento, [Validators.required]],
    bairro: [this.endereco.bairro, [Validators.required]],
    cep: [this.endereco.cep, [Validators.required]],
    complemento: [this.endereco.complemento],
    consultor: [this.cliente.consultor],
    uf: [this.endereco.uf, [Validators.required]],
    status: [this.cliente.status, [Validators.required]],
    porte: [this.cliente.porte, [Validators.required]]
  });
}

  private popularClientes() {
    this.clienteService.findAll().subscribe(data => {
      this.clienteList = data;
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

  private onSubmit() {
    if (!this.endereco.id) {
      this.cliente.endereco.push(this.endereco);
    }
    //@ts-ignore-block
    if ( this.cliente && this.cliente.consultor === '') {
      this.cliente.consultor = null;
    }
    this.clienteService.save(this.cliente).subscribe(data => {
      alert('Salvo com sucesso!');
      this.popularClientes();
      this.cliente = new ClienteEntity();
      this.endereco = new EnderecoEntity();
    }, erro => {
      alert('OPS!, SE VOCÊ TEM PERMISSÕES DE ADMINISTRADOR, VERIFIQUE OS DADOS E TENTE NOVAMENTE.');
    });
  }

  private limparForm() {
    this.cliente = new ClienteEntity();
    this.endereco = new EnderecoEntity();
  }

  private editar(cliente) {
    this.consultores = cliente.consultor;
    this.cliente = cliente;
    this.endereco = cliente.endereco[cliente.endereco.length - 1];
  }

  private deletarCliente(id: number) {
    this.clienteService.delete(id).subscribe(data => {
      this.popularClientes();
      alert('Deletado com sucesso!');
    }, error => {
      alert('OPS! VERIFIQUE SUAS PERMISSÕES E TENTE NOVAMENTE');
    });

  }

  public clenConsultor() {
    this.cliente.consultor = null;
  }

}
