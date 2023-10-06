import IngredientsList from '../components/IngredientsList'
import RecipeList from '../components/RecipeList'
import ShoppingList from '../components/ShoppingList'

const Home = () => {
    return (
        <>
            <div>Home</div>
            <RecipeList />
            <ShoppingList />
            <IngredientsList />
        </>
    )
}

export default Home