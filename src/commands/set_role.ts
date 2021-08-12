import {ExecuteCommand} from '../types'
import replies from '../replies'
import descriptions from '../description'

const command: ExecuteCommand = {
  name: 'set_role',
  description: descriptions.SET_ROLE,
  execute: async (interaction, storage): Promise<void> => {
    if (!interaction.guild) return interaction.reply(replies.ONLY_SERVER)
    await interaction.deferReply({ephemeral: true})

    const role = interaction.options.getRole('role')
    if (!role) {
      await interaction.editReply(replies.SET_ROLE)
      return
    }

    const guildStorage = await storage.getGuild(interaction.guild.id)

    if (!guildStorage) await storage.addGuild(interaction.guild.id, role.id)
    else await storage.editGuild(guildStorage.id, role.id, guildStorage.active)

    await interaction.editReply(replies.ROLE_ASSIGNED(role.name))
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
