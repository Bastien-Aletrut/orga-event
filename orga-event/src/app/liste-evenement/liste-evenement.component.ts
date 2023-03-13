import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.component.html',
  styleUrls: ['./liste-evenement.component.css']
})
export class ListeEvenementComponent implements OnInit {
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getEvenement().subscribe((result) => {
      console.log(result);
    });
  }

}
