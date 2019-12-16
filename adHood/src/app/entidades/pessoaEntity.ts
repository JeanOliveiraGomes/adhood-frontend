import { EnderecoEntity } from "./enderecoEntity";
import { VeiculoEntity } from "./veiculoEntity";
import { GenericEntity } from "./genericEntity";
import { PerfilEntity } from "./perfilEntity";

export class PessoaEntity extends GenericEntity {
    nome: string;
    email: string;
    cpf: string;
    dataNascimento: Date;
    telefone: string;
    endereco: EnderecoEntity;
    veiculo: VeiculoEntity[];
    perfil: PerfilEntity[];
    isAccountNonExpired: boolean;
    isAccountNonLocked: boolean;
    isCredentialsNonExpired: boolean;
    isEnabled: boolean;

    constructor() {
        super();
        this.nome = '';
        this.email = '';
        this.cpf = '';
        this.telefone = '';
        this.veiculo = [];
        this.perfil = [];
    }
}
