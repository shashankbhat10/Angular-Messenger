import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe( 'Test', 
                    'Test Recipe', 
                    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
                    [   new Ingredient('Test Ingredient', 12), 
                        new Ingredient('Test Ingredient 2', 25) 
                    ]),
        new Recipe( 'Another Test', 
                    'Another Test Recipe', 
                    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    [   new Ingredient('Another Test Ingredient', 18), 
                        new Ingredient('Another Test Ingredient 2', 35)
                    ])
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}