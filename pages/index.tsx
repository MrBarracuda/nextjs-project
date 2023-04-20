import { Inter } from 'next/font/google'
import { Typography } from '@/components/ui'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const array = ['about', 'pizza', 'profile']
  return (
    <main className="">
      <Navbar navItems={array} />
      <Typography.H1>Home page</Typography.H1>
    </main>
  )
}
