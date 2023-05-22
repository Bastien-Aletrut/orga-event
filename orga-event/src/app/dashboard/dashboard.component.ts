import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  evenements: any;
  textNbEvenement: any;
  textMoyenne: any;
  nbParticipant: number = 0;


  constructor(public authService: AuthService, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllEvenements();
  }

  getAllEvenements() {
    this.api.getAllEvenements().subscribe((result) => {
      this.textNbEvenement = document.getElementById('nbEvent');
      this.textMoyenne = document.getElementById('moyenne');
      this.evenements = result;
      this.textNbEvenement.textContent = this.evenements.length;
      for (var i = 0; i < this.evenements.length; i++) {
        this.nbParticipant += this.evenements[i].participants.length
      }
      this.textMoyenne.textContent = this.nbParticipant / this.evenements.length;
    });
  }

}
