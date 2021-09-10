
import { Button } from './components/button';
import { from } from 'rxjs';
import './style.scss';
import './style.sass';
import './style.css';

let a: string = "assda";
let b: string = "xyz";

console.log(a, b);

let button =  new Button();
button.click();
export class Example{
    arr=[1,2,,3,4,5,6,6,7,9];
    observable = from(this.arr);
    
    subscribe = this.observable.subscribe((value)=>{
        console.log(a + "Hello");

    })
}
