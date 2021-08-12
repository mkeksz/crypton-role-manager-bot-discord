import {ExecuteCommand} from '../types'
import descriptions from '../description'
import replies from '../replies'

const command: ExecuteCommand = {
  name: 'stop',
  description: descriptions.STOP,
  execute: async (interaction, storage): Promise<void> => {
    if (!interaction.guild) return interaction.reply(replies.ONLY_SERVER)
    await interaction.deferReply({ephemeral: true})

    const guildStorage = await storage.getGuild(interaction.guild.id)
    if (guildStorage) await storage.editGuild(guildStorage.id, guildStorage.roleAcademyID, false)

    await interaction.editReply(replies.DEACTIVATED)

    // TODO останавливает регулярные проверки
    //  и отключает реагирование на события вступления в дискорд новых участников
  }
}

export default command
