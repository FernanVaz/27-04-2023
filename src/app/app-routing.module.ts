import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario2Component } from './formulario2/formulario2.component';

const routes: Routes = [
  {path:"",component:FormularioComponent,children:
    [
      {path:"modificar/:id",component:Formulario2Component},
      {path:"detalle/:id", component:Formulario2Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
