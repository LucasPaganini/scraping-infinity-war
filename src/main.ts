import { doAndSetInterval } from './fn.do-and-set-interval'
import { isSellingTickets } from './fn.is-selling-tickets'
import { DATE, MOVIE, INTERVAL } from './const.config'
import { notify } from './fn.notify'

;(async () => {
  let isSelling = false
  const intervalID = doAndSetInterval(async () => {
    isSelling = await isSellingTickets(DATE, MOVIE)
    if (isSelling) {
      clearInterval(intervalID)
      notify(MOVIE)
    }
  }, INTERVAL)
})()
