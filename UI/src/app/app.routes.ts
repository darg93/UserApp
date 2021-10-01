
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CreateComponent } from "./components/create/create.component";
import { SearchComponent } from "./components/search/search.component";
import { UserComponent } from "./components/user/user.component";
import { UsersComponent } from "./components/users/users.component";

const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'create', component: CreateComponent},
    {path: 'users', component: UsersComponent},
    {path: 'user', component: UserComponent},
    {path: 'search', component: SearchComponent},
    {path: 'save', component: CreateComponent},
    {path: 'edit/:id', component: UserComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const ROUTING = RouterModule.forRoot(ROUTES);