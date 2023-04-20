import { Registration } from '@/components/registration'
import { Typography } from '@/components/ui'
import { useRouter } from 'next/router'

function Review() {
  const router = useRouter()
  const { pizzaId, reviewId } = router.query

  return (
    <Typography.H1>
      Route for review {reviewId} on pizza {pizzaId}
    </Typography.H1>
  )
}

export default Review
