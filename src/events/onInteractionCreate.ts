import {Interaction, Permissions} from 'discord.js'
import {ExecuteCommand, ExecuteEvent} from '../types'
import Storage from '../Storage/Storage'

const event: ExecuteEvent = {
  name: 'interactionCreate',
  once: false,
  execute: async (interaction: Interaction, commands: ExecuteCommand[], storage: Storage) => {
    if (!interaction.isCommand()) return
    if (interaction.user.bot) return

    const permissions = interaction.member?.permissions as Permissions
    if (!permissions || !permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return

    const command = commands.find(value => value.name === interaction.commandName)
    if (!command) return interaction.reply({content: 'Такой команды не существует!', ephemeral: true})

    try {
      await command.execute(interaction, storage)
    } catch (error) {
      console.error(error)
      return interaction.reply({content: 'При выполнении этой команды произошла ошибка!', ephemeral: true})
    }
    return
  }
}

export default event
