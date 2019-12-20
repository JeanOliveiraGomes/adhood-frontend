import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CampDriverEntity } from '../entidades/campDriverEntity';
import { PessoaService } from '../services/pessoaService/pessoa.service';
import { ClienteService } from '../services/cienteService/cliente.service';
import { CampanhaService } from '../services/campanhaService/campanha.service';
import { CampDriverService } from '../services/campDriverService/camp-driver.service';

@Component({
  selector: 'app-camp-drive',
  templateUrl: './camp-drive.component.html',
  styleUrls: ['./camp-drive.component.scss']
})
export class CampDriveComponent {

  private keyword = 'nome';

  private form: FormGroup;

  private campDrive: CampDriverEntity = new CampDriverEntity();

  private campDriveList: CampDriverEntity[] = [];
  private motoristaList = [];
  private clienteList = [];


  constructor(private fb: FormBuilder,
              private pessoaService: PessoaService, private campanhaService: CampanhaService,
              private campDriverService: CampDriverService) {
    this.buildForm();
    this.popularCampDrivers();
  }

  public buildForm() {
    this.form = this.fb.group({
      dataInicio: [this.campDrive.dataInicio, [Validators.required]],
      dataFim: [this.campDrive.dataFim, [Validators.required]],
      campanha: [this.campDrive.campanha, [Validators.required]],
      pessoa: [this.campDrive.pessoa, [Validators.required]],
    });
  }

  private popularCampDrivers() {
    this.campDriverService.findAll().subscribe(data => {
      this.campDriveList = data;
    });
  }

  private onChangeSearch(event, tipo) {
    if (tipo === 'motorista') {
      this.pessoaService.findByNome(event).subscribe(data => {
        this.motoristaList = data;
      }, error => {
        alert(error.error.message);
      });
    } else if (tipo === 'campanha') {
      this.campanhaService.findByNome(event).subscribe(data => {
        this.clienteList = data;
      }, error => {
        alert(error.error.message);
      });
    }

  }


  private onSubmit() {
    // if (!this.campDrive.id) {
    //   this.cliente.endereco.push(this.endereco);
    // }
    // //@ts-ignore-block
    // if ( this.cliente && this.cliente.consultor === '') {
    //   this.cliente.consultor = null;
    // }
    this.campDriverService.save(this.campDrive).subscribe(data => {
      alert('Salvo com sucesso!');
      this.limparForm();
      this.campDrive = new CampDriverEntity();
    }, erro => {
      alert('OPS!, SE VOCÊ TEM PERMISSÕES DE ADMINISTRADOR, VERIFIQUE OS DADOS E TENTE NOVAMENTE.');
    });
  }

  private limparForm() {
    this.campDrive = new CampDriverEntity();
  }

  private editar(cliente) {
    // this.consultores = [];
    // this.consultores.push(cliente.consultor);
    // this.cliente = cliente;
    // this.endereco = cliente.endereco[cliente.endereco.length - 1];
  }

  private deletarCliente(id: number) {
    this.campDriverService.delete(id).subscribe(data => {
      this.popularCampDrivers();
      alert('Deletado com sucesso!');
    }, error => {
      alert('OPS! VERIFIQUE SUAS PERMISSÕES E TENTE NOVAMENTE');
    });

  }

  public clenMotorista() {
    this.campDrive.pessoa = null;
  }

}
