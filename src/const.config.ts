import * as dotenv from 'dotenv'

dotenv.config()

type ENV = 'development' | 'production'
const getENV = (): ENV => {
  const isENV = (v: string): v is ENV =>
    new Set(['development', 'production']).has(v)
  const e = process.env.NODE_ENV

  if (e === undefined) return 'development'
  if (!isENV(e)) throw new Error(`Invalid NODE_ENV "${e}"`)
  return e
}

const requireEnvironmentVariable = (varName: string): string => {
  if (process.env[varName] === undefined)
    throw new Error(`${varName} must be specified`)
  else return process.env[varName] as string
}

export const DATE = '2019.12.20'
export const MOVIE = 'Star Wars: A Ascensão Skywalker'
export const INTERVAL = 1000 * 60 * 30 // Every 30 minutes

export const EMAIL_PASSWORD = requireEnvironmentVariable('EMAIL_PASSWORD')
export const NOTIFY_TO = requireEnvironmentVariable('NOTIFY_TO')
export const ENV = getENV()
