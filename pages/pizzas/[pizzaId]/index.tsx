import { Typography } from '@/components/ui'
import { useRouter } from 'next/router'

function RegistrationPage() {
  const router = useRouter()
  const { pizzaId } = router.query

  return <Typography.H1>Route for pizza {pizzaId} details</Typography.H1>
}

export default RegistrationPage
