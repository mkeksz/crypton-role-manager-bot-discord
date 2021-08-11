import {CommandInteraction} from 'discord.js'
import {ExecuteCommand} from '../types'

const command: ExecuteCommand = {
  name: 'start',
  description: 'Запускает автоматическое назначение ролей участникам Crypton Academy.',
  execute: async (interaction: CommandInteraction): Promise<void> => {
    await interaction.reply({content: 'Автоматическое назначение ролей запущено!'})

    // TODO запускает реагирование на события вступления участников и
    //  регулярную проверку на подписку участников академии.
    //  Роль убирается и назначается только тем у кого нет роли или есть роль участника криптона
  }
}

export default command
