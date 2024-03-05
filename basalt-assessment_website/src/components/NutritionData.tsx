import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface NutritionDataItem {
  name: string
  calories: number
  protein: number
  carbohydrates: number
  fat: number
}

const NutritionData: React.FC = () => {
  const [nutritionData, setNutritionData] = useState<NutritionDataItem[]>([])

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await axios.get('/api/nutrition')
        setNutritionData(response.data)
      } catch (error) {
        console.error('Error fetching nutrition data:', error)
      }
    }

    fetchNutritionData()
  }, [])

  return (
    <div>
      <h2>Nutrition Data</h2>
      <ul>
        {nutritionData.map((data) => (
          <li key={data.name}>
            <p>{data.name}</p>
            <p>Calories: {data.calories}</p>
            <p>Protein: {data.protein}</p>
            <p>Carbohydrates: {data.carbohydrates}</p>
            <p>Fat: {data.fat}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NutritionData
