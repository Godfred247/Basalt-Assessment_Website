import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface NewsArticle {
  name: string
  description: string
  url: string
}

interface Props {
  query: string
  apiKey: string
}

const NewsList: React.FC<Props> = ({ query, apiKey }) => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])

  useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        const response = await axios.get(`/api/news?q=${query}&apiKey=${apiKey}`)
        setNewsArticles(response.data.articles)
      } catch (error) {
        console.error('Error fetching news articles:', error)
      }
    }

    fetchNewsArticles()
  }, [query, apiKey])

  return (
    <div>
      <h2>News Articles</h2>
      <ul>
        {newsArticles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              {article.name}
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsList
