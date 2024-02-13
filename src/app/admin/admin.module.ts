import { NgModule } from "@angular/core";
import { adminRoutingModule } from "./admin-routing.module";
import { adminComponent } from "./admin.component";
import { FeesComponent } from './fees/fees.component';




@NgModule({
    declarations:[
        adminComponent,
        FeesComponent
    ],
    imports:[
        adminRoutingModule
    ],
    exports:[],
    providers:[]
})

export class adminModules{

}