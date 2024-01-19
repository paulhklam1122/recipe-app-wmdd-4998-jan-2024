import { Center } from '@gluestack-ui/themed'
import Form from '../forms/Form'
import { useState } from 'react'
import { getRecipes } from '../../services/api'
import RecipesList from '../lists/RecipesList'

const recipesResponse = [
  {
    image:
      'https://edamam-product-images.s3.amazonaws.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLWVhc3QtMSJGMEQCIH0PPikkiPsehkj%2Beq%2F5eainrWmfrqq%2FbkuQAcGO4tCbAiA5qiREsA7lts6PpnRSiHtqLmgAT%2FtoD8v%2FSqBigrYk9irCBQjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIML7yxQeGmBQiNTPCnKpYFkQMvRSYFVwb1qhVi3SFDUCPvpyvytpvAT8H6TFWegiO7y2q%2BVCaxV8FHTprpq0DKcjWbZCH2vgLR54NKJQYlGZYzKwd%2FY7pnEIzakW8qTKzctN3IoQN6nyGZsR90Wy9%2FKL3p4DelacOJfU7yMQJaMTHUbdvpt5mL3r1KeY5kmlb63qfhHFXZngbdMlrVrIk7Wxr6hzHRnIYp46l1o%2FGARZAhWX2zLyiU7eBX4w%2BB97IwOuWrRRGw%2BimoThNq55%2FPQd%2BWooDMXN7Wf5bWTLRfS5OXYJvoQP%2Fuef9dY1Bknw1vewolVGpWU2cvAnPQJrfuTHD4CnqK9msxiJy7Pz8VQNwIjg58LjYM9SsU6PsPMb8KTsiAHxQ6LINQc2zF9FpElNI3279mJM1ltAR7U4%2Fxm28Pr2PvPwYJiCFUgRlJaV92hM7DhcTdpy1SbNY2tSnNx%2BCoYy4xlj91BK71Sxv%2FBx%2BXO%2BdwT2X72zhHZvB5qcIUbcHId5oZ3Jf%2BkMgQTtTWZY81%2Bc1fsbHV5BuGg7hp%2B9Qi5SSt%2FCvtbufnHUARha7fURJiB0TQyvE5%2B0c%2BAQqanj3QjgsiHzzCYDCptI4N3eZPKSlq3L6JmAF20ivhwOaOvM99JeZLT4iYn1B3ki%2BN0UBsZept04utyBt947fSo50jePIaB%2BTLPKFUlClj9eUwfM0iOZ9zfzr7cSczW4toAzri1hps0K9akxlNAyGU2xCJpBiqPikaJ%2F7OdpoVArjnB0gYyjRyYiIJset4tz3NMt864WCL54%2Fo48DUmFxfyTyxHH%2FMaguAULuxRocPsaOwh9tKGFGv3trPNrb7GNxct9rrJOiRSzuDelJPZjjxRe7wBbS%2FFuyOpWskqoTg%2BnXeOZQyoccw4bmnrQY6sgFb%2F5%2FEMnSDU%2FwOUb59VSruGLgHgMIgVyA7OJDUik4eKezqKURCuBd5r7k59wEhqAY2r2LLzlOFgjIYoura4booVorfE8rYMUGEM8n6QGBQID9Pb%2FNFhT4bheoHjpSN0U%2Fy0%2FGF8hBHzZpZtu%2BWtARv%2Fvc%2FlNYQ7AYI2uZrUM%2FXRPwTfNCL%2Bdd6x7iXix1rNpwXsrL8m8EVJHc3300mm6SZ%2BLr4UX%2FYebELI6Jfwc9mgyW5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T035129Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAXYNSBOZ%2F20240119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0b59b85cea44a95e4239fcd440c6b1553e85429a776d3edccb342199b4f52161',
    label: 'Roast sirloin of beef',
    source: 'BBC Good Food',
    url: 'http://www.bbcgoodfood.com/recipes/2558/roast-sirloin-of-beef'
  },
  {
    image:
      'https://edamam-product-images.s3.amazonaws.com/web-img/ad3/ad35ae4c847dcd39bad104838007f84a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLWVhc3QtMSJGMEQCIH0PPikkiPsehkj%2Beq%2F5eainrWmfrqq%2FbkuQAcGO4tCbAiA5qiREsA7lts6PpnRSiHtqLmgAT%2FtoD8v%2FSqBigrYk9irCBQjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIML7yxQeGmBQiNTPCnKpYFkQMvRSYFVwb1qhVi3SFDUCPvpyvytpvAT8H6TFWegiO7y2q%2BVCaxV8FHTprpq0DKcjWbZCH2vgLR54NKJQYlGZYzKwd%2FY7pnEIzakW8qTKzctN3IoQN6nyGZsR90Wy9%2FKL3p4DelacOJfU7yMQJaMTHUbdvpt5mL3r1KeY5kmlb63qfhHFXZngbdMlrVrIk7Wxr6hzHRnIYp46l1o%2FGARZAhWX2zLyiU7eBX4w%2BB97IwOuWrRRGw%2BimoThNq55%2FPQd%2BWooDMXN7Wf5bWTLRfS5OXYJvoQP%2Fuef9dY1Bknw1vewolVGpWU2cvAnPQJrfuTHD4CnqK9msxiJy7Pz8VQNwIjg58LjYM9SsU6PsPMb8KTsiAHxQ6LINQc2zF9FpElNI3279mJM1ltAR7U4%2Fxm28Pr2PvPwYJiCFUgRlJaV92hM7DhcTdpy1SbNY2tSnNx%2BCoYy4xlj91BK71Sxv%2FBx%2BXO%2BdwT2X72zhHZvB5qcIUbcHId5oZ3Jf%2BkMgQTtTWZY81%2Bc1fsbHV5BuGg7hp%2B9Qi5SSt%2FCvtbufnHUARha7fURJiB0TQyvE5%2B0c%2BAQqanj3QjgsiHzzCYDCptI4N3eZPKSlq3L6JmAF20ivhwOaOvM99JeZLT4iYn1B3ki%2BN0UBsZept04utyBt947fSo50jePIaB%2BTLPKFUlClj9eUwfM0iOZ9zfzr7cSczW4toAzri1hps0K9akxlNAyGU2xCJpBiqPikaJ%2F7OdpoVArjnB0gYyjRyYiIJset4tz3NMt864WCL54%2Fo48DUmFxfyTyxHH%2FMaguAULuxRocPsaOwh9tKGFGv3trPNrb7GNxct9rrJOiRSzuDelJPZjjxRe7wBbS%2FFuyOpWskqoTg%2BnXeOZQyoccw4bmnrQY6sgFb%2F5%2FEMnSDU%2FwOUb59VSruGLgHgMIgVyA7OJDUik4eKezqKURCuBd5r7k59wEhqAY2r2LLzlOFgjIYoura4booVorfE8rYMUGEM8n6QGBQID9Pb%2FNFhT4bheoHjpSN0U%2Fy0%2FGF8hBHzZpZtu%2BWtARv%2Fvc%2FlNYQ7AYI2uZrUM%2FXRPwTfNCL%2Bdd6x7iXix1rNpwXsrL8m8EVJHc3300mm6SZ%2BLr4UX%2FYebELI6Jfwc9mgyW5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240119T035129Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAXYNSBOZ%2F20240119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f38cdb9724a53d610ac4189b936c69b780f161a2d0a74b88183b04d00b965ee4',
    label: 'Beef Tea',
    source: 'Epicurious',
    url: 'https://www.epicurious.com/recipes/food/views/beef-tea-395253'
  },
  {
    image:
      'https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCM5Wis73TvS9BWXmwlFp83JrKo1IVbW%2BH5jGfxV2glhAIhAPv6Nk9rlvr2SbAUCdTkqhjJT%2BYu9dshE8tzAKTt6LliKrgFCCEQABoMMTg3MDE3MTUwOTg2Igzqk36L6CBxLRACsQQqlQUZCOtdf%2BTqRAEevubyhIKEC9sLExKcLli8%2BWrmUFv89flrQvtwNNYOAPkPnbSo%2BZc0j9S%2BcRvJqnU9zZR%2F0ZXOmjL5Cp7VfrZb1yzMPCeyCdDpXtFx4B6TcHaIeIkGcI6QHRIepKWalDEUYyHs7HwYED25ELkDAY41BCtUr57AvgyKXExUt%2Bdo9E0XAFvxLIHF7prmvEeLILMCAw6%2Bs7yrw5%2FDQJ%2FpPF%2F0HSDJMn71SdZ%2BynSy4Y9ch3OEzA3na%2FKvbl2sH7K9Iks0Gjdd1i1WmjnZwwMgLxBNzlc3u8p1P8bxfZMdHPxUvNSlJ8C4%2FLHJaSM8%2B42DQgBNe4kXIFTVFeejr0901NOSQopJwBMiYVbmWICXOZwpQZRo1FzcDR%2Fr0Bm6e5g5kW7N31q%2FIXfTG0lQrqFvZrka6cM%2Bn8p2kCmx%2FwER9u5hbuxolQafhAYmKAofJ61sX7Q%2F22QemJUwQtUP9jZHq47gHL3KimPLL7O3PlizPdeuRZVXtOo3lYpeIuJG4Q5cFlI9Na6HNBSAGS5WmhxGJmNWzJBb9hBL3WAf3Rlcf0tzBE8SVV3AgVAl4skpbpI1QnjMzPQW2bGB5VELBLN8%2BsZJvNo3fGvBGZwU1HtAOiOqfhpUlku6eIgcszWFYujyhsEe0oHeK6AK1x2%2B%2BWtXNjfzf51M9%2BwVkxKwE%2FHyf34JV45fWhfnJ2sHUgi7M%2BEsqj7vCoL1ybKKV%2BcrY%2F16zxNtq6gC5Y7a2168%2BtEb1RSPzlfxajt2LpofV27u2Si2PQ%2B60VjjBr7xii6UJ7YzI7ywhcyjAgvJxANOkAHIjYSWe%2BSoCajM1Shz%2Fjkfs4bvctJqNrsNsjl7eL5QlS%2Fqj8cnvO7gyd3pq%2FRIZXkKMIjvv6MGOrABLYe%2Boh%2FAW4%2BXv8rKaTNjbFLkQwDAwNbR9SXZKfV77QhtuorKk8jHqYB6gDwfrSWVhF0EVylNi2fE9L27pAkpm9yP2pi8i3nlj4woLa%2BanBHXMRQtgZ8%2BwJSHNnuJ5KRbeMS%2BuUJNXuzoUEmBOr1VxbEslUl0ZiyemI1tSFv0XnUnRmvDyyU3ixHwgTtixVXGrzPK2%2B6vPmc1uWVBJjonx%2FNXEBJX4TiIxl1KscOgoNg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230526T011635Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN7NW4PFZ%2F20230526%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0f97856a9c093a24afc6e4ffefb52d114731c43f89bf97e88bab663c020aee3b',
    label: 'Beef Brisket',
    source: 'Food Network',
    url: 'https://www.foodnetwork.com/recipes/beef-brisket-recipe1-1945709'
  }
]

const RecipesContainer = props => {
  const { navigation } = props
  const [ingredient, setIngredient] = useState(null)
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = () => {
    setRecipes(recipesResponse)
    // getRecipes(ingredient).then(
    //   recipes => {
    //     setRecipes(recipes)
    //   },
    //   error => {
    //     alert('Error', `Something went wrong! ${error}`)
    //   }
    // )
  }

  const handleInputChange = ingredient => {
    setIngredient(ingredient)
  }

  return (
    <Center px={4}>
      <Form onInputChange={handleInputChange} onSubmit={fetchRecipes} />
      <RecipesList navigation={navigation} recipes={recipes} />
    </Center>
  )
}

export default RecipesContainer
