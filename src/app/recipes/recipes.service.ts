import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: '/assets/schnitzel.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Jollof',
      imageUrl: '/assets/jollof.jpg',
      ingredients: ['Rice', 'Oil', 'Pepper', 'Meat']
    },
    {
      id: 'r3',
      title: 'Noodles',
      imageUrl: '/assets/noodles.jpg',
      ingredients: ['Noodles', 'Crayfish', 'Tomato', 'Stock fish']
    },
    {
      id: 'r4',
      title: 'Spaghetti',
      imageUrl: '/assets/spag.jpg',
      ingredients: ['Spaghetti', 'Crayfish', 'Tomato', 'Stock fish', 'Pepper']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
}
