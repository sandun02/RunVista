import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector } from 'react-redux'
function Home() { 
  const {cars} = useSelector(state=>state.carsReducer)
  return (
    <DefaultLayout>
        <h1>Home page</h1>
        <h1>The length of cars array is {cars.length}</h1>
    </DefaultLayout>
  )
}

export default Home