import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'ayoub';
  public nameUpper: string = 'AYOUB';
  public fullName: string = 'AyoUB OUriaGHLi ROMeo';
  public customDate: Date = new Date();
}
