import * as puppeteer from 'puppeteer'
;(async () => {
  const browser = await puppeteer.launch({
    headless: process.env.NODE_ENV !== 'development',
  })
  const page = await browser.newPage()

  await page.goto(
    'https://www.ingresso.com/sao-paulo/home/cinemas/uci-analia-franco',
    { waitUntil: 'networkidle0' },
  )
})()
