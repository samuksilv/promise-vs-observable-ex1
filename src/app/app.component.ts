import { Component } from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

 constructor(){
   
   /**
   * apesar da promise não ser consumida por um then() , a promisse executa todo o seu bloco de código. 
   * A promise mantém um estado compartilhado, a execução da promise acontece uma unica vez e quando chamo o .then() o valor não é executado novamente
   */
  
    // new Promise((resolve)=>{
    //   console.warn('iniciando a Promise');      
    //   resolve(1);
    //   resolve(2);
    // })
    // .then(x=> console.log('Promisse', x));

    /**
     * para que o bloco de código do observable seja executado é necessário chamar .subscribe()
     */
    Observable.create((Observable)=>{
      console.warn('iniciando o Observable');
      Observable.next(1);
      Observable.next(2);
    })
    // .subscribe(x=> console.log('Observable', x));

 }

}
