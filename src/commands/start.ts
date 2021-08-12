import {ExecuteCommand} from '../types'
import replies from '../replies'
import descriptions from '../description'

const command: ExecuteCommand = {
  name: 'start',
  description: descriptions.START,
  execute: async (interaction, storage): Promise<void> => {
    if (!interaction.guild) return interaction.reply(replies.ONLY_SERVER)
    await interaction.deferReply({ephemeral: true})

    const guildStorage = await storage.getGuild(interaction.guild.id)
    if (!guildStorage || !guildStorage.roleAcademyID) {
      await interaction.editReply(replies.FIRST_SET_ROLE)
      return
    }
    await storage.editGuild(guildStorage.id, guildStorage.roleAcademyID, true)

    await interaction.editReply(replies.ACTIVATED)

    // TODO запускает реагирование на события вступления участников и
    //  регулярную проверку на подписку участников академии.
    //  Роль убирается и назначается только тем у кого нет роли или есть роль участника криптона
  }
}

export default command
