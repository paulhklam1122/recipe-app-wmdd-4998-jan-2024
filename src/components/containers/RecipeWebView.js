import { ExternalLinkIcon, Icon } from '@gluestack-ui/themed'
import { useLayoutEffect } from 'react'
import WebView from 'react-native-webview'

const RecipeWebView = ({ navigation, route }) => {
  const { url } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Icon as={ExternalLinkIcon} />
    })
    return () => {}
  }, [navigation])

  return <WebView source={{ uri: url }} />
}

export default RecipeWebView
