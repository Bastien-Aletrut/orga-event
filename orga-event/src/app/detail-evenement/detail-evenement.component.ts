import { Component, Inject, OnInit } from '@angular/core';
import { ListeEvenementComponent } from '../liste-evenement/liste-evenement.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Evenements } from 'src/model/evenement';


@Component({
  selector: 'app-detail-evenement',
  templateUrl: './detail-evenement.component.html',
  styleUrls: ['./detail-evenement.component.css']
})
export class DetailEvenementComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ListeEvenementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Evenements) { }

  ngOnInit(): void {
    console.log(this.data.lieu);
  }

}
