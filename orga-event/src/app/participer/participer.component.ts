import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListeEvenementComponent } from '../liste-evenement/liste-evenement.component';

@Component({
  selector: 'app-participer',
  templateUrl: './participer.component.html',
  styleUrls: ['./participer.component.css']
})
export class ParticiperComponent {

  formParticipant!: FormGroup;
  allData: any = [];
  currentEvenements!: any;
  alert: boolean = false;

  patternNomPre = "^[a-zA-Z- ]+$";
  patternMail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  patternNum = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, public dialogRef: MatDialogRef<ListeEvenementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.formParticipant = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', Validators.required],
      numTel: ['', Validators.required],
    })

    this.api.getCurrentEvenements().subscribe((result) => {
      this.currentEvenements = result;
    })
  }

  postParticipant() {
    var idEvenement = { "id": this.data.id };
    var formValue = this.formParticipant.value;
    this.allData = { idEvenement, formValue }

    for (var i = 0; i < this.currentEvenements.length; i++) {
      if (this.data.id == this.currentEvenements[i].id) {
        if (this.currentEvenements[i].participants.length < this.currentEvenements[i].nbMaxParticipant) {
          if (confirm('Voulez-vous vraiment vous inscrire pour cet événement ?')) {
            this.api.postMember(this.allData).subscribe((result) => {
            });
            location.reload();
            this.dialogRef.close();
          }
        } else {
          this.alert = true;
        }
      }
    }
  }
}
