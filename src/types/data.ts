import { Ingrediente } from "./ingredient";
import { Menu } from "./menu";
import { Receta } from "./recipe";
import { ListasDeCompra } from "./shoppingList";

export interface Data {
    ingredientes: Ingrediente[];
    recetas: Receta[];
    menus: Menu[];
    listas_de_compra: ListasDeCompra[];
}
