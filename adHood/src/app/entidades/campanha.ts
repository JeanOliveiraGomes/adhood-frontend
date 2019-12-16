import { GenericEntity } from './genericEntity';
import { Data } from '@angular/router';

export class CampanhaEntity extends GenericEntity {
    dataInicio: Date;
    dataFim: Date;
    valorCampanha: Date;
    status: boolean;
}
