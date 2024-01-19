import { FlatList } from '@gluestack-ui/themed'
import RecipeCard from '../listItems/RecipeCard'

const RecipesList = props => {
  const { navigation, recipes } = props
  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => (
        <RecipeCard
          image={item.image}
          label={item.label}
          source={item.source}
          url={item.url}
          navigation={navigation}
        />
      )}
    />
  )
}

export default RecipesList
