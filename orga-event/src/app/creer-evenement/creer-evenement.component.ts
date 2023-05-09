import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-creer-evenement',
  templateUrl: './creer-evenement.component.html',
  styleUrls: ['./creer-evenement.component.css']
})
export class CreerEvenementComponent implements OnInit{

  formEvent!: FormGroup;
  allData!:any;

  constructor(private fb: FormBuilder, private dateAdapter: DateAdapter<any>, private api: ApiService){}

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

  postEvenement(){
    this.allData = this.formEvent.value;
    this.api.postEvenement(this.allData).subscribe((result) => {
      console.log(result)
    })
    console.log(this.formEvent.value);
  }

  setFrench(){
    this.dateAdapter.setLocale('fr');
  }

  // onSubmit(){
  //   console.log(this.formEvent.value);
  // }

}
