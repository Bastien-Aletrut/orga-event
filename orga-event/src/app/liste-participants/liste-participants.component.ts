import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../authService';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-liste-participants',
  templateUrl: './liste-participants.component.html',
  styleUrls: ['./liste-participants.component.css']
})
export class ListeParticipantsComponent implements OnInit {

  evenement: any;
  participants: any;
  evenementId: any;
  membersData: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  displayedColumns: string[] = ['nom', 'prenom', 'mail', 'numTel'];

  constructor(private route: ActivatedRoute, private api: ApiService, public authService: AuthService) { }

  ngOnInit(): void {
    this.evenementId = this.route.snapshot.paramMap.get('id');
    this.getOneEvenement(this.evenementId);
  }

  getOneEvenement(id: any) {
    this.api.getOneEvenement(id).subscribe((result) => {
      this.evenement = result;
      this.participants = this.evenement[0].participants;
      this.membersData = new MatTableDataSource<any>(this.participants);
      this.membersData.paginator = this.paginator;
      this.membersData.sort = this.sort;
    });
  }

  downloadList() {
    this.api.getOneEvenement(this.evenementId).subscribe((result) => {
      this.evenement = result;
      var data = [];
      var doc = new jsPDF();
      var rows = [];
      doc.text("Liste des participants : "+this.evenement[0].nom, 10, 10);
      data.push(this.evenement[0].participants);

      data.forEach((element: any) => {
        var temp = [element.nom, element.prenom, element.name, element.numTel];
        rows.push(temp);
      });

      autoTable(doc, { html: '#myTable' })
      doc.save('Participants' + this.evenement[0].acronyme + ".pdf");
    })
  }

  filtre(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.membersData.filter = value;
  }
}
