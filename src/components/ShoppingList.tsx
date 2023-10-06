import data from '../../data/data.json';
import { findIngredientById } from '../helpers/findIngredientById';

const ShoppingList = () => {
    const { listas_de_compra } = data
    return (
        <>
            {
                listas_de_compra &&
                listas_de_compra.length > 0 &&
                listas_de_compra.map((compra) => (
                    <div key={compra.id}>
                        <p>{compra.nombre}</p>
                        <ul>
                            {
                                compra.items.map((item, index) => {
                                    const ingredient = findIngredientById(item.ingrediente_id)
                                    return (
                                        <li key={index}>{item.cantidad} - {ingredient?.nombre}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                ))
            }
        </>
    )
}

export default ShoppingList