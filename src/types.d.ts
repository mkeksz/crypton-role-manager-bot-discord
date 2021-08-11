import {CommandInteraction} from 'discord.js'
import {EventNames} from './enums'

declare interface ExecuteCommand extends Command {
  execute: (interaction: CommandInteraction) => Promise<void> | void,
}

declare interface Command {
  name: string,
  description: string,
  options?: OptionCommand[]
}

declare interface OptionCommand {
  name: string,
  description: string,
  type: 'STRING' | 'INTEGER' | 'NUMBER' | 'BOOLEAN' | 'USER' | 'CHANNEL' | 'ROLE' | 'MENTIONABLE'
  required?: boolean,
  choices: undefined,
  options: undefined
}

declare interface ExecuteEvent {
  name: EventNames,
  once: boolean,
  execute: (...args: any) => void
}
