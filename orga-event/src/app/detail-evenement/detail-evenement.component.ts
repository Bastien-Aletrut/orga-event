import { Component, Inject } from '@angular/core';
import { ListeEvenementComponent } from '../liste-evenement/liste-evenement.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Evenement } from 'src/model/evenement';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../authService';


@Component({
  selector: 'app-detail-evenement',
  templateUrl: './detail-evenement.component.html',
  styleUrls: ['./detail-evenement.component.css']
})
export class DetailEvenementComponent {

  constructor(
    public dialogRef: MatDialogRef<ListeEvenementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Evenement, private api: ApiService, private router: Router, public authService: AuthService) { }


  listeParticipants() {
    this.router.navigate(['/listeParticipants/' + this.data.id]);
    this.dialogRef.close();
  }

}
