import * as puppeteer from 'puppeteer'
import { isSellingTickets } from './fn.is-selling-tickets'

const date = '2019.12.19'
const movie = 'Star Wars: A Ascensão Skywalker'
;(async () => {
  console.log('Launching browser')
  const browser = await puppeteer.launch({
    headless: process.env.NODE_ENV !== 'development',
  })
  const page = await browser.newPage()

  console.log('Consulting ingresso.com')
  const formatedDate = date.replace(/\./g, '')
  const url = `https://www.ingresso.com/sao-paulo/home/cinemas/uci-analia-franco#!#data=${formatedDate}`
  await page.goto(url, { waitUntil: 'networkidle2' })
  const _isSellingTickets = await page.evaluate(isSellingTickets, movie)

  if (_isSellingTickets) console.log('Tickets are being sold!')
  else console.log('Not yet... Sorry.')

  console.log('Closing browser')
  await browser.close()
})()
