
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./components/create/create.component";
import { SearchComponent } from "./components/search/search.component";
import { UserComponent } from "./components/user/user.component";
import { UsersComponent } from "./componentsusers.component";

const ROUTES: Routes = [
    {path: 'users', component: UsersComponent},
    {path: 'search', component: SearchComponent},
    {path: 'save', component: CreateComponent},
    {path: 'edit/:id', component: UserComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'search'}
]

export const ROUTING = RouterModule.forRoot(ROUTES);