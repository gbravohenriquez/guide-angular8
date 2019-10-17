import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipe: Recipe[] = [
    new Recipe('un test de receta',
      'un test de descripcion',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('papas fritas', 20)]),
    new Recipe('un test de receta2',
      'un test de descripcion2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('pan', 1),
        new Ingredient('agua', 20)])
  ];

  getRecipes() {
    return this.recipe.slice() ;
  }
  constructor() { }
}
