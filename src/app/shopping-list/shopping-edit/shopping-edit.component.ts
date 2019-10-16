import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredienteEvento = new EventEmitter<Ingredient>();
  @Output() clearEvento = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    this.ingredienteEvento.emit(new Ingredient(ingName, ingAmount));

  }
  clearList() {
    this.clearEvento.emit();
  }

}
