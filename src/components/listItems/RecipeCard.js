import { Box, Button, ButtonText, Heading, Image, Text, VStack } from '@gluestack-ui/themed'

const RecipeCard = props => {
  const { image, label, source, url, navigation } = props
  return (
    <Box
      maxWidth='$64'
      borderColor='$borderLight200'
      borderRadius='$lg'
      borderWidth='$1'
      my='$4'
      overflow='hidden'
      sx={{
        '@base': {
          mx: '$5'
        },
        '@lg': {
          my: '0'
        },
        _dark: {
          bg: '$backgroundDark900',
          borderColor: '$borderDark800'
        }
      }}
    >
      <Box></Box>
      <VStack px='$6' pt='$4' pb='$6'>
        <Text _dark={{ color: '$textLight200' }} fontSize='$sm' my='$1.5'>
          August 16, 2023
        </Text>
        <Heading _dark={{ color: '$textLight200' }} size='sm'>
          {label}
        </Heading>
        <Text my='$1.5' _dark={{ color: '$textLight200' }} fontSize='$xs'>
          {source}
        </Text>
        <Image
          h={150}
          width='100%'
          source={{
            uri: image
          }}
        />
        <Button
          variant='link'
          onPress={() => {
            navigation.navigate('Show', {
              label,
              url
            })
          }}
        >
          <ButtonText fontSize='$sm'>View</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default RecipeCard
