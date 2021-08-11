import {CommandInteraction} from 'discord.js'
import {ExecuteCommand} from '../types'

const command: ExecuteCommand = {
  name: 'stop',
  description: 'Останавливает автоматическое назначение ролей участникам Crypton Academy.',
  execute: async (interaction: CommandInteraction): Promise<void> => {
    await interaction.reply({content: 'Автоматическое назначение ролей остановлено!'})

    // TODO останавливает регулярные проверки
    //  и отключает реагирование на события вступления в дискорд новых участников
  }
}

export default command
