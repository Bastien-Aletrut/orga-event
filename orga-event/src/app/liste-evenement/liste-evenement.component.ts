import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailEvenementComponent } from '../detail-evenement/detail-evenement.component';

@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.component.html',
  styleUrls: ['./liste-evenement.component.css']
})

export class ListeEvenementComponent implements OnInit {

  evenements!: any;
  displayedColumns: string[] = ['acronyme', 'nom', 'lieu', 'action'];

  constructor(private api: ApiService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getEvenements()
  }

  getEvenements() {
    this.api.getEvenement().subscribe((result) => {
      this.evenements = result
      console.log(this.evenements)
    });
  }

  openDialog(nomP:string, acronymeP:string, lieuP:string, descriptionP:Text, dateOuvertureP:Date, dateClotureP:Date, nbMaxParticipantP:number): void {
    const dialogRef = this.dialog.open(DetailEvenementComponent, {
      width: '55%',
      height: '80%',
      data: {
        nom: nomP,
        acronyme: acronymeP,
        lieu: lieuP,
        description: descriptionP,
        dateOuverture: dateOuvertureP,
        dateCloture: dateClotureP,
        nbMaxParticipant: nbMaxParticipantP,
      }
    });
  }

}

