import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, useTheme } from 'react-native-paper'
import PageButton from 'src/components/PageButton'

const Home = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <View style={{backgroundColor: theme.colors.primary, }}>
      <Text>Home</Text>
      <PageButton/>
      <Pressable onPress={()=>{
        navigation.navigate("CreateTask")
      }}>
      <Text>
        Navigate to create task
      </Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})