import { GluestackUIProvider } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import { config } from '@gluestack-ui/config'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from './src/components/layout/Header'
import RecipesContainer from './src/components/containers/RecipesContainer'
import AppStack from './src/components/stacks/AppStack'

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        {/* <Header /> */}
        <AppStack />
        <StatusBar style='#2c3e50' />
        {/* <RecipesContainer /> */}
      </GluestackUIProvider>
    </SafeAreaProvider>
  )
}

export default App
