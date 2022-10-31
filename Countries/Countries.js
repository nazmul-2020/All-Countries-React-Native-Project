import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Countries() {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])


  return (
    <View>
      <Text>Nazmul n {countries.length} </Text>
    </View>
  )
}