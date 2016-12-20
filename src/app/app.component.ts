import { Component, ViewEncapsulation } from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';

  dogs = [
    {name: 'Mal', img: 'Mal.png'},
    {name: 'Porter', img: 'Porter.png'},
    {name: 'Koby', img: 'Koby.png'},
    {name: 'Razzle', img: 'Razzle.png'},
    {name: 'Molly', img: 'Molly.png'},
    {name: 'Husi', img: 'Husi.png'},
  ];

  constructor(public dialog: MdDialog) {}

  addDog() {
    const dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().first().subscribe((result) => {
      this.dogs.push({name: result, img: 'Porter.png'});
    });
  }

}

@Component({
  selector: 'add-dialog',
  template: `
    <md-input placeholder="Name" [(ngModel)]="name"></md-input>
    <button md-raised-button color="accent" (click)="submit()">ADD</button>
  `
})
export class AddDialogComponent {
  name: string;

  constructor(public dialogRef: MdDialogRef<AddDialogComponent>) {}

  submit() {
    this.dialogRef.close(this.name);
  }
}
