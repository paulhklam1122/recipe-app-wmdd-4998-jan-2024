import axios from 'axios'
import { APP_ID, APP_KEY, BASE_URL, TYPE } from '../config/apiConfig'
import qs from 'qs'

export const getRecipes = async ingredient => {
  const url = BASE_URL

  try {
    const params = {
      q: ingredient,
      app_id: APP_ID,
      app_key: APP_KEY,
      type: TYPE,
      field: ['url', 'image', 'label', 'source']
    }

    console.log('getting recipes')
    const recipeAxios = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })

    const response = await recipeAxios.get(url, { params })

    return response
  } catch (error) {
    throw error
  }
}

// https://api.edamam.com/api/recipes/v2?type=public&q=beef&app_id=e779c403&app_key=e635cdb39eb21af74733329b07962458&field=label&field=image&field=source&field=url
