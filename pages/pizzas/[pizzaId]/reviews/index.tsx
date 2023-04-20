import { Typography } from '@/components/ui'
import { useRouter } from 'next/router'

function Reviews() {
  const router = useRouter()
  const { pizzaId } = router.query

  return <Typography.H1>Route for pizza {pizzaId} reviews</Typography.H1>
}

export default Reviews
