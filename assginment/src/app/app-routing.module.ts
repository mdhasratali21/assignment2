import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact/contact.component";
import { FormComponent } from "./contact/form/form.component";

const routes : Routes = [
    {path:'home',component:ContactComponent},
    {path:'form',component:FormComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}