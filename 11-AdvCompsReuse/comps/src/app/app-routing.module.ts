import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./modules/elements/elements.module').then(
        (m) => m.ElementsModule
      ),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./modules/collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
      import('./modules/views/views.module').then((m) => m.ViewsModule),
  },
  {
    path: 'individuals',
    loadChildren: () =>
      import('./modules/individuals/individuals.module').then(
        (m) => m.IndividualsModule
      ),
  },
  {
    path: 'module',
    loadChildren: () =>
      import('./modules/mods/mods.module').then((m) => m.ModsModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
