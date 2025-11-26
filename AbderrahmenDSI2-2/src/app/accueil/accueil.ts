import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-accueil',
  imports: [MatButtonModule, MatToolbarModule, RouterLink, MatGridListModule, MatTabsModule, MatIconModule],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {

}
