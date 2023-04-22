'use client'

import { Typography } from '@/components/ui'
import { useParams } from 'next/navigation'

function Reviews() {
  const params = useParams()
  const { pizzaId } = params
  console.log(pizzaId)

  return <Typography.H1>Route for pizza {pizzaId} reviews</Typography.H1>
}

export default Reviews
