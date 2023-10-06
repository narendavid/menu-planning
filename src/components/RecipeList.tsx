import { useEffect } from 'react'
import data from '../../data/data.json';
import { findIngredientById } from '../helpers/findIngredientById';

const RecipeList = () => {

    const { recetas } = data

    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <>
            <h2>Recetas</h2>
            {
                recetas &&
                recetas.length > 0 &&
                recetas.map((receta) => {
                    const ingredients = receta.ingredientes.map((id) => {
                        return findIngredientById(id)
                    })
                    return (
                        <div key={receta.id}>
                            <h3>{receta.nombre}</h3>
                            <p>{receta.instrucciones}</p>
                            <h4>Ingredientes</h4>
                            <ul>
                                {
                                    ingredients.map((ingredient) => (
                                        <li key={ingredient?.id}>{ingredient?.nombre}</li>
                                    ))
                                }
                            </ul>
                        </div>)
                }
                )
            }
        </>
    )
}

export default RecipeList