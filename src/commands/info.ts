import {ExecuteCommand} from '../types'
import descriptions from '../description'
import replies from '../replies'

const command: ExecuteCommand = {
  name: 'info',
  description: descriptions.INFO,
  execute: async (interaction, storage): Promise<void> => {
    if (!interaction.guild) return interaction.reply(replies.ONLY_SERVER)
    await interaction.deferReply({ephemeral: true})

    const guildStorage = await storage.getGuild(interaction.guild.id)
    if (!guildStorage) {
      await interaction.editReply(replies.INFO(null, false))
      return
    }
    const role = interaction.guild.roles.cache.find(value => value.id === guildStorage.roleAcademyID)
    await interaction.editReply(replies.INFO(role?.name ?? null, guildStorage.active))
  }
}

export default command
