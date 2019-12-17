import { GenericEntity } from "./genericEntity";
import { EnderecoEntity } from "./enderecoEntity";

export class ClienteEntity extends GenericEntity {
    nome: string;
    segmento: string;
    endereco: EnderecoEntity;
    porte: string;
    status: boolean;


    constructor() {
        super();
        this.nome = '';
        this.segmento = '';
        this.porte = '';
        this.endereco = new EnderecoEntity();
    }
}
