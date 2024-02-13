import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})

 export class secondService{
        showText(){
            return 'This is the text from Second service'
        }
}