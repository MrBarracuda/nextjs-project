import { useQuery } from '@tanstack/react-query'
import { getBooksByAuthor } from '@/lib/getBooksByAuthor'
import { Navbar } from '@/components/navbar'
import { Article, Typography } from '@/components/ui'

export default async function Home() {
  const array = ['about', 'pizzas', 'profile', 'login']

  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ['author'],
  //   queryFn: getBooksByAuthor,
  // })
  //
  // if (isError) throw new Error('Failed to fetch data')
  // if (isLoading) return <div>Loading...</div>

  return (
    <main className="">
      <Navbar navItems={array} />
      <Typography.H1>Home page</Typography.H1>
      <Article />
    </main>
  )
}
