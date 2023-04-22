'use client'

import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/lib/getArticles'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export const Article = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  })

  if (isError) throw new Error('Failed to fetch data')
  if (isLoading) return <div>Loading...</div>

  return (
    <div className={cn('flex flex-col items-center')}>
      {data.map((article) => (
        <Card key={article.id} className="w-[380px]">
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.summary}</CardDescription>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <h1>adasd</h1>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
