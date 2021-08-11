import {CommandInteraction} from 'discord.js'
import {ExecuteCommand} from '../types'

const command: ExecuteCommand = {
  name: 'set_role',
  description: 'Указывает на какую роль бот должен назначать участников Crypton Academy.',
  execute: async (interaction: CommandInteraction): Promise<void> => {
    // await interaction.deferReply({ephemeral: true})
    await interaction.reply({content: 'Теперь участникам Crypton Academy будет назначаться эта роль.'})

    // TODO записывает в storage какая роль должна быть у участников криптона на этом сервере
  },
  options: [
    {
      name: 'role',
      description: 'Роль которая будет назначаться участникам',
      type: 'ROLE',
      required: true,
      choices: undefined,
      options: undefined
    }
  ]
}

export default command
