import React from 'react'
import NewsList from './components/NewsList'
import NutritionData from './components/NutritionData'

const App: React.FC = () => {
  return (
    <div>
      <NewsList query='nutrition' apiKey='37357ca9cbf74765b1fc2cc19b8db700' />
      <NutritionData />
    </div>
  )
}

export default App
