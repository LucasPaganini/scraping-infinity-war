import * as puppeteer from 'puppeteer'

const closeBannerIfNecessary = async () => {
  const buttonToCloseBanner: HTMLButtonElement = document.querySelector(
    '#pre-site > header > div > div.col-xs-8.col-md-10.text-xs-right > button',
  )
  return new Promise(resolve => {
    // If there's no banner, resolve
    if (!buttonToCloseBanner) resolve()

    // If there's a banner, close it and resolve after 2 seconds
    buttonToCloseBanner.click()
    setTimeout(resolve, 2000)
  })
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

  const isSellingTickets: boolean = await page.evaluate(async () => {
    await closeBannerIfNecessary()
    const dates = getAvailableDates()
    return dates.includes('05/05')
  })
})()
