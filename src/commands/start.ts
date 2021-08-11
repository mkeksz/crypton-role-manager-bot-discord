import {CommandInteraction} from 'discord.js'
import {ExecuteCommand} from '../types'

const command: ExecuteCommand = {
  name: 'start',
  description: 'Запускает автоматическое назначение ролей участникам Crypton Academy.',
  execute: async (interaction: CommandInteraction): Promise<void> => {
    await interaction.reply({content: 'Автоматическое назначение ролей запущено!'})
  }
}

export default command
