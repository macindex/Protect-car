import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ClienteCrudComponent } from "./views/cliente-crud/cliente-crud.component";
import { ClienteCreateComponent } from "./components/cliente/cliente-create/cliente-create.component";
import { ClienteUpdateComponent } from "./components/cliente/cliente-update/cliente-update.component";
import { ClienteDeleteComponent } from "./components/cliente/cliente-delete/cliente-delete.component";
import { AuthenticationComponent } from "./views/authentication/authentication.component";
import { LoginComponent } from "./components/cliente/account/login/login.component";
import { CreateAccountComponent } from "./components/cliente/account/create-account/create-account.component";
import { AuthGuard } from "./components/cliente/account/shared/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "clientes", component: ClienteCrudComponent },
      { path: "clientes/create", component: ClienteCreateComponent },
      { path: "clientes/update/:id", component: ClienteUpdateComponent },
      { path: "clientes/delete/:id", component: ClienteDeleteComponent },
    ],
    canActivate: [AuthGuard],
    },
    { 
      path: "", component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: "login", component: LoginComponent },
      { path: "create-account", component: CreateAccountComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
