import { Routes } from '@angular/router';
import { LayoutComponent } from './Layout/Components/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[{
            path:'',loadChildren: ()=> import('./Pages/pages/pages.module').then((m)=>m.PagesModule)
        }

        ]
    
        
    }
];
