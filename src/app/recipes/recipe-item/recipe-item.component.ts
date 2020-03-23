import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
// import the recipe item so its bindable from outside by adding @input

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor() { }

  ngOnInit() {}

}
