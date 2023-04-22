import { Articles } from '@/types'
import ky from 'ky'

const API_URL = 'https://blog-app-next-js-json-server-git-main-thebarracuda.vercel.app/articles'

export const getArticles = async (): Promise<Articles> => ky(API_URL).json()
