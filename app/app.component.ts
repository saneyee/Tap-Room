import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Tap Room</h1>
  <h2>Menu</h2>
   <h4 *ngFor="let currentKeg of kegs">Name :{{currentKeg.name}}
   <button class="bg-info" (click)="showKeg(currentKeg)">Show</button>
   <button class="bg-info" (click)="editKeg(currentKeg)">Edit</button>
   <button class="bg-danger" (click)="sellKeg(currentKeg)">Sell</button></h4>
     <br>
     <form>
         <label>Name:</label>
         <input #name>
         <label>Brand:</label>
         <input #brand>
         <label>Price:</label>
         <input #price>
         <label>AlcoholContent:</label>
         <input #alcohol>
         <br>
         <br>
         <button class="bg-info" (click) = "addKeg(name.value,brand.value,price.value,alcohol.value)">Add a new Keg</button>
       </form>

     <div *ngIf="detailsKeg">
     <hr>
     <h3>Name :{{detailsKeg.name}}</h3>
     <h3>Brand :{{detailsKeg.brand}}</h3>
     <h3>Price :{{detailsKeg.price}}</h3>
     <h3>AlcoholContent :{{detailsKeg.alcoholContent}}</h3>
     <h3>Pints :{{detailsKeg.pints}}</h3>
     </div>

    <div *ngIf="selectedKeg">
    <hr>
    <h3>Edit Keg</h3>
    <br>
    <label>Enter Name:</label>
    <input [(ngModel)]="selectedKeg.name">
    <br>
    <br>
    <label>Enter Brand:</label>
    <input [(ngModel)]="selectedKeg.brand">
    <br>
    <br>
    <label>Enter Price:</label>
    <input [(ngModel)]="selectedKeg.price">
    <br>
    <br>
    <label>Enter AlcoholContent:</label>
    <input [(ngModel)]="selectedKeg.alcoholContent">
    <br>
    <br>
    <button (click)="finishedEditing()">Done</button>
    </div>


  </div>
  `
})


export class AppComponent {
  kegs: Keg[] = [
    new Keg('Missouri  Light Lager','Bud Light',7.99,3),
    new Keg('Colorado  Light Lager','Coors ligh',10.99, 4.2),
    new Keg('Missouri  American Style Lager','Budweise',17.99,5.1),
    new Keg('Hawaii  American All Malt Lager','Kona Longboard Island Lager',9.99,6.5),
    new Keg('California  American Style Lager','Rainier Lager',9.99,7.3),
    new Keg('Massachusetts  Fruit Cider','Angry Orchard Crisp Apple Cider',4.99,4),
    new Keg('Alaska  Altbier','Alaskan Amber',9.99,8.5),
    new Keg('Washington  American Amber/Red Ale','Mac and Jack African Amber',6.99,5.9),
    new Keg('Washington  American Pale Ale','Georgetown Mannys Pale Ale',6.99,4.7),
    new Keg('Washington and New Hampshire  American India Pale Ale','Redhook Long Hammer IPA',7.99,6.8)
  ];
  selectedKeg = null;
  detailsKeg = null;

  addKeg(inpname: string,inpbrand: string,inpprice: number, inpalcoholContent: number) {
    this.kegs.push(new Keg(inpname, inpbrand, inpprice, inpalcoholContent));
  }
  showKeg(currentKeg) {
    this.detailsKeg = currentKeg;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  sellKeg(currentKeg) {
    currentKeg.pints -= 1;
  }

finishedEditing() {
    this.selectedKeg = null;
  }

  }
export class Keg {
  public pints: number =124;
constructor(public name: string,public brand: string,public price: number,public alcoholContent: number) { }
}
