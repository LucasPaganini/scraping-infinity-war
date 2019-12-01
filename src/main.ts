import { isSellingTickets } from './fn.is-selling-tickets'
import { doAndSetInterval } from './fn.do-and-set-interval'

const date = '2019.12.20'
const movie = 'Star Wars: A Ascensão Skywalker'
const interval = 1000 * 60 * 30 // Every 3 minutes

;(async () => {
  let isSelling = false
  const intervalID = doAndSetInterval(async () => {
    isSelling = await isSellingTickets(date, movie)
    if (isSelling) clearInterval(intervalID)
  }, interval)
})()
