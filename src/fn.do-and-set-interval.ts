export const doAndSetInterval = (
  fn: (...args: any[]) => void,
  ms: number,
): ReturnType<typeof setInterval> => {
  fn()
  return setInterval(fn, ms)
}
