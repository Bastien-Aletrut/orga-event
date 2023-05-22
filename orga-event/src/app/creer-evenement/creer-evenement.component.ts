import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-evenement',
  templateUrl: './creer-evenement.component.html',
  styleUrls: ['./creer-evenement.component.css']
})
export class CreerEvenementComponent implements OnInit {

  formEvent!: FormGroup;
  allData!: any;

  patternGlobal = "^[a-zA-Z- 0-9]+$";
  patternNb = "[0-9]+";

  constructor(private fb: FormBuilder, private dateAdapter: DateAdapter<any>, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formEvent = this.fb.group({
      acronyme: ['', Validators.required],
      nom: ['', Validators.required],
      lieu: ['', Validators.required],
      description: ['', Validators.required],
      dateOuverture: ['', Validators.required],
      dateCloture: ['', Validators.required],
      nbMaxParticipant: ['', Validators.required]
    })
  }

  postEvenement() {
    this.allData = this.formEvent.value;
    this.api.postEvenement(this.allData).subscribe((result) => {
    })
    this.router.navigate(["/"])
  }

}
