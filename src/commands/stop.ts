import {ExecuteCommand} from '../types'
import descriptions from '../description'
import replies from '../replies'

const command: ExecuteCommand = {
  name: 'stop',
  description: descriptions.STOP,
  execute: async (interaction, storage) => {
    if (!interaction.guild) return
    await interaction.deferReply({ephemeral: true})
    await storage.editGuildActive(interaction.guild.id, false)
    await interaction.editReply(replies.DEACTIVATED)

    // TODO останавливает регулярные проверки
    //  и отключает реагирование на события вступления в дискорд новых участников
  }
}

export default command
