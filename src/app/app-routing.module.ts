import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', // manda el nombre del pais y va a mostrar el contenido del pais seleccionado
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
        // En caso de ingresar otra url que no exista va a ser redigido a la página principal
    }
];


@NgModule({
    imports:[
        RouterModule.forRoot( routes )
        // RouterModule, se importa, hace la configuración necesaria para las rutas
        // forRoot() : rutas principales, solo deberia de haber una
        // forChild() : rutas hijas
        // piden rutas de tipo Routes
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}