import { FC, ReactNode } from 'react'

type TypographyProps = {
  children: ReactNode
}

const H1: FC<TypographyProps> = ({ children }) => (
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>
)

const H2: FC<TypographyProps> = ({ children }) => (
  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
    {children}
  </h2>
)

const H3: FC<TypographyProps> = ({ children }) => (
  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>
)

const H4: FC<TypographyProps> = ({ children }) => (
  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h3>
)

const List: FC<TypographyProps> = ({ children }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>

const P: FC<TypographyProps> = ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  List,
  P,
}
