import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss']
})
export class RecipeDetailPage implements OnInit {
  // TO USE IN TEMPLATE, WE STORE IN A PROPERTY OF OUR CLASS OF LOADEDRECIPE
  // IT IS A GOOD PRACTICE TO STATE THE TYPE OF PROP AN OBJECT WILL HOLD
  // WE IMPORT RECIPE FROM RECIPE.MODEL
  loadedRecipe: Recipe;


  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit() {
    // paramMap means a map of all the parameters this route receives
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        return;
      }
      // name has to match what is in the routing config
      const recipeId = paramMap.get('recipeId');
      // WE THEN STORE THE RECIPE BEING RETRIEVED
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }
}
