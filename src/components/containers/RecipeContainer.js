import { Box, Button, ButtonText, Center, Text } from '@gluestack-ui/themed'

const RecipeContainer = ({ navigation, route }) => {
  const { label, url } = route.params

  return (
    <Box width='100%'>
      <Center py={10}>
        <Text my={10}>{label}</Text>
        <Button
          onPress={() => {
            navigation.navigate('Web', { label, url })
          }}
          variant='link'
        >
          <ButtonText>View Online</ButtonText>
        </Button>
      </Center>
    </Box>
  )
}

export default RecipeContainer
