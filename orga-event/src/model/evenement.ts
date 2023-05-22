export interface Evenement {
    id:number;
    acronyme: string;
    nom: string;
    lieu: string;
    description: string;
    dateOuverture: Date;
    dateCloture: Date;
    nbMaxParticipant : number;
}