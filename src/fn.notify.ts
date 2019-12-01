import { createTransport } from 'nodemailer'
import { SMTP_SENDER, NOTIFY_TO } from './const.config'

const transport = createTransport({
  host: SMTP_SENDER.host,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_SENDER.user,
    pass: SMTP_SENDER.pass,
  },
})

export const notify = (movie: string): Promise<void> => {
  console.log('Notifying by email')
  return new Promise((resolve, reject) => {
    transport.sendMail(
      {
        from: '"Lucas Paganini" <no-reply@lucaspaganini.com>',
        to: NOTIFY_TO,
        subject: `The tickets to "${movie}" are available for purchase`,
        text: 'Go buy these tickets before they sell out',
      },
      err => (err ? reject(err) : resolve()),
    )
  })
}
