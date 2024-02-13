import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { adminComponent } from "./admin.component";
import { FeesComponent } from "./fees/fees.component";


const routes :Routes=[
    {
        path:'' , 
        component:adminComponent,
        children:[
            
            {
                path:'fees', 
                component:FeesComponent
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})



export class adminRoutingModule{

}