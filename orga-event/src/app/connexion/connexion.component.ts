import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formConnexion!: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.formConnexion = this.fb.group({
      nomUtilisateur: ['adminPO', Validators.required],
      mdp: ['adminPO', Validators.required],
    })
  }

  seConnecter() {
    if (this.formConnexion.value.nomUtilisateur == "adminPO" && this.formConnexion.value.mdp == "adminPO") {
      this.authService.isAdmin = true;
      this.router.navigate(['/']);
    }
  }

}
