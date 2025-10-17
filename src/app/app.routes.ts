import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { Pagina1Component } from '../pages/pagina1/pagina1.component';
import { Pagina2Component } from '../pages/pagina2/pagina2.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'pagina1',
        component:Pagina1Component
    },
    {
        path:'pagina2',
        component:Pagina2Component
    },
    {
        path:'**',
        redirectTo:''
    }
];
