import * as _config from './config.json'

type ENV = 'development' | 'production'
const getENV = (): ENV => {
  const isENV = (v: string): v is ENV =>
    new Set(['development', 'production']).has(v)
  const e = process.env.NODE_ENV

  if (e === undefined) return 'development'
  if (!isENV(e)) throw new Error(`Invalid NODE_ENV "${e}"`)
  return e
}

export const DATE = _config.movie.date
export const MOVIE = _config.movie.title
export const INTERVAL = 1000 * 60 * _config.interval // _config.interval is in minutes

export const SMTP_SENDER = _config.emailNotification.secureSMTPSender
export const NOTIFY_TO = _config.emailNotification.destination
export const ENV = getENV()
