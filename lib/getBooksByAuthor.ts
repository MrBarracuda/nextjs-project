import { Book } from '@/lib/types'
import ky from 'ky'
import { useState } from 'react'

const state = 'rowel atienza'
const url = 'https://openlibrary.org/search/authors.json'

export const getBooksByAuthor = async (): Promise<Book> => ky(`${url}?q=${state}`).json()
