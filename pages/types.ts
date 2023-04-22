export type Article = {
  id: string
  title: string
  summary: string
  content: string
  author: string
  publicationDate: string
}

export type Articles = Article[]

export type Docs = {
  key: string
  text: string[]
  type: string
  name: string
  alternate_names: string[]
  birth_date: string
  top_work: string
  work_count: number
  top_subjects: string[]
  _version_: number
}[]

export type Book = {
  numFound: number
  start: number
  numFoundExact: boolean
  docs: Docs
}
