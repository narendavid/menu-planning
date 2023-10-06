import data from "../../data/data.json";

export const findIngredientById = (id: number) => {
    const ingrediente = data.ingredientes.find((ingredient) => {
        return id === ingredient.id
    })
    return ingrediente
}