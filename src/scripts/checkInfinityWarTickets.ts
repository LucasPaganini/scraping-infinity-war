import * as puppeteer from 'puppeteer'

const closeBannerIfNecessary = () => {
  const buttonToCloseBanner: HTMLButtonElement = document.querySelector(
    '#pre-site > header > div > div.col-xs-8.col-md-10.text-xs-right > button',
  )
}

const getAvailableDates = (): string[] => {
  return []
}
;(async () => {
  const browser = await puppeteer.launch({
    headless: process.env.NODE_ENV !== 'development',
  })
  const page = await browser.newPage()

  await page.goto(
    'https://www.ingresso.com/sao-paulo/home/cinemas/uci-analia-franco',
    { waitUntil: 'networkidle0' },
  )

  const isSellingTickets: boolean = await page.evaluate(() => {
    closeBannerIfNecessary()
    const dates = getAvailableDates()
    return dates.includes('05/05')
  })
})()
