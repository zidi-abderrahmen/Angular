import { Routes } from '@angular/router';
import { Connexion } from './connexion/connexion';
import { Inscription } from './inscription/inscription';
import { Accueil } from './accueil/accueil';

export const routes: Routes = [
    {
        path: '', component: Connexion
    },
    {
        path: 'Inscription', component: Inscription
    },
    {
        path: 'Accueil', component: Accueil
    }
];
