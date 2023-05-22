import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailEvenementComponent } from '../detail-evenement/detail-evenement.component';
import { AuthService } from '../authService';
import { ParticiperComponent } from '../participer/participer.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.component.html',
  styleUrls: ['./liste-evenement.component.css']
})

export class ListeEvenementComponent implements OnInit {

  evenements!: any;
  currentEvenements!: any;
  allEventData: any;
  currentEventData: any;

  @ViewChild(MatPaginator) paginator1 !: MatPaginator;
  // @ViewChild(MatPaginator) paginator2 !: MatPaginator;

  @ViewChild(MatSort) sort1 !: MatSort;
  @ViewChild(MatSort) sort2 !: MatSort;

  displayedColumns: string[] = ['acronyme', 'nom', 'lieu', 'participants', 'action'];

  constructor(private api: ApiService, public dialog: MatDialog, public authService: AuthService) { }

  ngOnInit(): void {
    this.getAllEvenements();
    this.getCurrentEvenements();
  }

  getAllEvenements() {
    this.api.getAllEvenements().subscribe((result) => {
      this.evenements = result;
      this.allEventData = new MatTableDataSource<any>(this.evenements);
      this.allEventData.paginator = this.paginator1;
      this.allEventData.sort = this.sort1;
    });
  }

  getCurrentEvenements() {
    this.api.getCurrentEvenements().subscribe((result) => {
      this.currentEvenements = result;
      this.currentEventData = new MatTableDataSource<any>(this.currentEvenements);
      this.currentEventData.sort = this.sort2;
    })
  }

  deleteEvenement(id: number) {
    if (confirm("Voulez-vous vraiment supprimer cet événement ?")) {
      this.api.deleteEvenement(id).subscribe((result) => {
      });
      setTimeout(() => {
        this.getAllEvenements()
      }, 500);

    }
  }

  filtreAll(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.allEventData.filter = value;
  }

  filtreCurrent(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.currentEventData.filter = value;
  }

  openDialogDetail(pId: number, pNom: string, pAcronyme: string, pLieu: string, pDescription: Text, pDateOuverture: Date, pDateCloture: Date, pNbMaxParticipant: number): void {
    const dialogRef = this.dialog.open(DetailEvenementComponent, {
      width: '55%',
      height: '80%',
      data: {
        id: pId,
        nom: pNom,
        acronyme: pAcronyme,
        lieu: pLieu,
        description: pDescription,
        dateOuverture: pDateOuverture,
        dateCloture: pDateCloture,
        nbMaxParticipant: pNbMaxParticipant,
      }
    });
  }

  openDialogParticiper(pId: number): void {
    const dialogRef = this.dialog.open(ParticiperComponent, {
      width: '55%',
      height: '65%',
      data: {
        id: pId
      }
    });
  }
}

