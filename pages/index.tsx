import { Inter } from 'next/font/google'
import { Article, Typography } from '@/components/ui'
import { Navbar } from '@/components/navbar'
import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/lib/getArticles'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const array = ['about', 'pizzas', 'profile']

  return (
    <main className="">
      <Navbar navItems={array} />
      <Typography.H1>Home page</Typography.H1>
      <Article />
    </main>
  )
}
