import { GenericEntity } from "./genericEntity";
import { EnderecoEntity } from "./enderecoEntity";

export class ClienteEntity extends GenericEntity {
    nome: string;
    segmento: string;
    endereco: EnderecoEntity;


    constructor() {
        super();
        this.nome = '';
        this.segmento = '';
    }
}
