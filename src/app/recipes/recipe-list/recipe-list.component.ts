import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Chicken Inasal', 'This is a description', 'https://bing.com/th?id=OSK.abe1187979a3b700cb737c3b452196cf'),
    new Recipe('Chicken Inasal', 'This is a description', 'https://bing.com/th?id=OSK.abe1187979a3b700cb737c3b452196cf')
  ]
}
