import {
  Button,
  ButtonIcon,
  ButtonText,
  FormControl,
  FormControlLabelText,
  HStack,
  Icon,
  Input,
  InputField,
  InputIcon,
  SearchIcon,
  VStack
} from '@gluestack-ui/themed'
import { StyleSheet } from 'react-native'

const Form = props => {
  const { onInputChange, onSubmit } = props

  return (
    <VStack space={2} width='100%' p={5} my={10}>
      <FormControl isRequired>
        <FormControl.Label fontSize='sm'>
          <FormControlLabelText>Ingredient Search</FormControlLabelText>
        </FormControl.Label>
      </FormControl>
      <HStack width='100%' space={2}>
        <Input style={styles.inputStyles} mr={10} px={5}>
          <InputIcon>
            <Icon as={SearchIcon} size='sm' />
          </InputIcon>
          <InputField
            onChangeText={value => {
              onInputChange(value)
            }}
            placeholder='Enter an ingredient...'
          />
        </Input>

        <Button onPress={onSubmit}>
          <ButtonIcon as={SearchIcon} mr='$2' />
          <ButtonText>Search</ButtonText>
        </Button>
      </HStack>
    </VStack>
  )
}

const styles = StyleSheet.create({
  inputStyles: { flex: 1, alignItems: 'center' }
})

export default Form
