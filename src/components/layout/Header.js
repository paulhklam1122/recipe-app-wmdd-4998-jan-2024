import { Box, StatusBar, Text } from '@gluestack-ui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#2c3e50' />
      <Box bg='#2c3e50' alignItems='center' justifyContent='center' safeAreaTop py={5}>
        <Text color='#fff' fontSize={20} fontWeight='bold'>
          Recipe App
        </Text>
      </Box>
    </SafeAreaView>
  )
}

export default Header
