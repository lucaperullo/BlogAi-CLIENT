import { Select } from '@chakra-ui/react'
import { useStateValue } from 'context/stateProvider'


export default function LocaleSelector() {
    const [{locale},dispatch] = useStateValue()
    const handleChange = (e: { target: { value: any } }) => {
        dispatch({
            type: 'SET_LOCALE',
            locale: e.target.value
        })
    }
    
  return (
   <Select onChange={handleChange}>
        <option value="en">English</option>
        <option value="it">Italian</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="ru">Russian</option>
        
   </Select>
  )
}
