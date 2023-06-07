import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
    //i18n Select
    public name:string = 'Ayoub';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
      male: 'invitarlo',
      female : 'invitarla'
    }

    changeClient():void{
      this.name = 'Melissa';
      this.gender = 'female';
    }

    //i18Plural

    public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardp','Melissa','Natalia'];
    public clientsMap = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      '=2': 'tenemos 2 clientes esperando.',
      'other': 'tenemos # clientes esperando.',
    }

    deleteClient():void{
      //this.clients.pop();
      this.clients.shift();
    }
}
