import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClienteEntity } from '../entidades/clienteEntity';
import { PessoaService } from '../services/pessoaService/pessoa.service';
import { ClienteService } from '../services/cienteService/cliente.service';
import { CampanhaEntity } from '../entidades/campanha';
import { CampanhaService } from '../services/campanhaService/campanha.service';

@Component({
  selector: 'app-cadastro-campanha',
  templateUrl: './cadastro-campanha.component.html',
  styleUrls: ['./cadastro-campanha.component.scss']
})
export class CadastroCampanhaComponent {

  private keyword = 'nome';

  private form: FormGroup;

  private campanha: CampanhaEntity = new CampanhaEntity();

  private campanhaList: CampanhaEntity[] = [];

  private clienteList: ClienteEntity[] = [];

  constructor(private fb: FormBuilder,
    private campanhaService: CampanhaService, private clienteService: ClienteService) {
    this.buildForm();
    this.popularCampanhas();
  }

  public buildForm() {
    this.form = this.fb.group({
      nome: [this.campanha.nome, [Validators.required]],
      dataInicio: [this.campanha.dataInicio, [Validators.required]],
      dataFim: [this.campanha.dataFim, [Validators.required]],
      valorCampanha: [this.campanha.valorCampanha, [Validators.required]],
      status: [this.campanha.status, [Validators.required]],
    });
  }

  public adicionarCliente(event) {
    if (!this.campanha.cliente.find(d => d.id === event.id)) {
      this.campanha.cliente.push(event);
    }
  }
  private deletarCliente(item) {
    this.campanha.cliente.splice(this.clienteList.findIndex(d => d.id === item.id), 1);
  }

  private popularCampanhas() {
    this.campanhaService.findAll().subscribe(data => {
      this.campanhaList = data;
    });
  }

  private onChangeSearch(event) {
    this.clienteService.findByNome(event).subscribe(data => {
      this.clienteList = data;
    }, error => {
      alert(error.error.message);
    });
  }

  private onSubmit() {
    this.campanhaService.save(this.campanha).subscribe(data => {
      alert('Salvo com sucesso!');
      this.popularCampanhas();
      this.campanha = new CampanhaEntity();

    }, erro => {
      alert('OPS!, SE VOCÊ TEM PERMISSÕES DE ADMINISTRADOR, VERIFIQUE OS DADOS E TENTE NOVAMENTE.');
    });
  }

  private limparForm() {
    this.campanha = new CampanhaEntity();
  }

  private editar(campanha) {
    this.campanha = campanha;
  }

  private deletarCampanha(id: number) {
    this.campanhaService.delete(id).subscribe(data => {
      this.popularCampanhas();
      alert('Campanha Deletada Com Sucesso');
    }, error => {
      alert('OPS! VERIFIQUE SUAS PERMISSÕES E TENTE NOVAMENTE');
    });
  }


}
