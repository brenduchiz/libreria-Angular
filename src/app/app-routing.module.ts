import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponentComponent } from './private/private-component.component';
import { PublicComponentComponent } from './public/public-component.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'public',
  pathMatch: 'full',
}, {
  path: 'public',
  component: PublicComponentComponent,
  loadChildren: () =>
    import('./public/public.module').then(m => m.PublicModule)
}, {
  path: 'app',
  component: PrivateComponentComponent,
  loadChildren: () =>
    import('./private/private.module').then(m => m.PrivateModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
