import {ExecuteEvent} from '../types'

const event: ExecuteEvent = {
  name: 'ready',
  once: true,
  execute: () => console.info('Bot is ready!')
}

export default event
