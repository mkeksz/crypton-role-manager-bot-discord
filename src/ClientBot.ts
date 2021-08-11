import {Client, ClientEvents, Intents} from 'discord.js'
import CommandManager from './CommandManager'
import config from '../config'

const INTENTS = [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]

export default class ClientBot {
  private readonly client: Client
  private readonly token: string

  public constructor() {
    this.client = new Client({intents: INTENTS})
    this.token = config.TOKEN
  }

  public async login(): Promise<void> {
    await this.client.login(this.token)
  }

  public getCommandManager(): CommandManager {
    if (!this.client.application) throw new Error('Couldn\'t get ClientApplication')
    return new CommandManager(this.client.application.commands)
  }

  public on<K extends keyof ClientEvents>(eventName: K, callback: (...args: ClientEvents[K]) => void): void {
    this.client.on(eventName, callback)
  }

  public once<K extends keyof ClientEvents>(eventName: K, callback: (...args: ClientEvents[K]) => void): void {
    this.client.once(eventName, callback)
  }

  public destroy(): void {
    this.client.destroy()
  }
}
