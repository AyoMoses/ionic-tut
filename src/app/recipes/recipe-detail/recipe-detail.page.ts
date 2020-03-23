import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    // paramMap means a map of all the parameters this route receives
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      // name has to match what is in the routing config
      const recipeId = paramMap.get('recipeId');
      // WE THEN STORE THE RECIPE BEING RETRIEVED
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    // alert ctrl is then used here having been injected ato notify user of deletion
    this.alertCtrl
      .create({
        header: 'Are you sure about this life decision?',
        message: 'Do you really want to do this? Delete the recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            // we want to delete only if this button is pressed thus the handler below
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              // when recipe has been deleted we then go to the recipes page having added private router and imported it
              this.router.navigate(['/recipes']);
            }
          }
        ]
        // create returns a promise which gives an alert element
      }).then(alertEl => {
        alertEl.present();
      });
  }
}
