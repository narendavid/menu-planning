import { Receta } from '../types/recipe'
import { findIngredientById } from '../helpers/findIngredientById'

type Props = {
    receta: Receta
}

const Recipe = ({ receta }: Props) => {
    return (
        <div>
            <h1>{receta.nombre}</h1>
            <div>
                {receta.instrucciones}
            </div>
            <div>
                <img src={receta.foto} alt={receta.nombre} />
            </div>
            <div>
                {
                    receta.ingredientes.map(() => {
                        const ingredients = receta.ingredientes.map((id) => {
                            return findIngredientById(id)
                        })
                        return (
                            <ul>
                                {
                                    ingredients.map((ingredient) => (
                                        <li key={ingredient?.id}>{ingredient?.nombre}</li>
                                    ))
                                }
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Recipe