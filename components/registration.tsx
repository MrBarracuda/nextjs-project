import Image from 'next/image'
import { Typography, Button, Label, Input } from '@/components/ui'

type Props = {
  text: string
}

export const Registration = ({ text }: Props) => (
  <div className="container flex justify-center gap-6">
    <Image alt="registartion-image" src="/sigmund.avif" width={450} height={450} />
    <div>
      <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Create an account</h3>
      <Typography.H1>asd</Typography.H1>
      <form>
        <Label>Enter your email below to create your account</Label>
        <Input placeholder="name@example.com" />
        <Button>Sign In with Email</Button>
        <Typography.P>{text}</Typography.P>
      </form>
    </div>
  </div>
)
