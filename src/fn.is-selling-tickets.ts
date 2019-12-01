export const isSellingTickets = async (movieTitle: string) => {
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

  const listMovies = (): string[] => {
    const moviesQuery =
      '#contentarea-sessionpage > div.layout1.clearfix.m-b-1 > section > div > div ing-card-theater'
    const movies = Array.from(document.querySelectorAll(moviesQuery))

    const titleQuery =
      'article > div > div.col-xs.col-md-5.col-lg-6.se-info > span > a'
    return movies
      .map(movie => movie.querySelector(titleQuery) as HTMLAnchorElement)
      .map(titleEl => titleEl.text.trim())
  }

  await closeBannerIfNecessary()
  return listMovies().includes(movieTitle)
}
