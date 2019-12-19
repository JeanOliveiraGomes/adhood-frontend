import { GenericEntity } from './genericEntity';
import { Timestamp } from 'rxjs';
import { CampanhaEntity } from './campanha';
import { MotoristaEntity } from './motoristaEntity';

export class CampDriverEntity extends GenericEntity {
    dataInicio: Date;
    dataFim: Date;
    campanha: CampanhaEntity;

    constructor() {
        super();
        this.campanha = new CampanhaEntity();
    }
}
