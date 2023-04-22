import { Inter } from 'next/font/google'
import { Article, Input, Typography } from '@/components/ui'
import { Navbar } from '@/components/navbar'
import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/lib/getArticles'
import { useEffect, useState } from 'react'
import { Articles, Book } from '@/lib/types'
import ky from 'ky'
import { getBooksByAuthor } from '@/lib/getBooksByAuthor'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const array = ['about', 'pizzas', 'profile']

  const { data, isError, isLoading } = useQuery({
    queryKey: ['author'],
    queryFn: getBooksByAuthor,
  })

  if (isError) throw new Error('Failed to fetch data')
  if (isLoading) return <div>Loading...</div>

  return (
    <main className="">
      <Navbar navItems={array} />
      <Typography.H1>Home page</Typography.H1>
      {/*<Article />*/}
      <div>
        {data.docs.map((doc) => (
          <div key={doc.key}>{doc.top_work}</div>
        ))}
      </div>
    </main>
  )
}
