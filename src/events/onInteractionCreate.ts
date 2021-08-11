import {Interaction, Permissions} from 'discord.js'
import {ExecuteCommand, ExecuteEvent} from '../types'

const event: ExecuteEvent = {
  name: 'interactionCreate',
  once: false,
  execute: (interaction: Interaction, commands: ExecuteCommand[]) => {
    if (!interaction.isCommand()) return
    if (interaction.user.bot) return

    const permissions = interaction.member?.permissions as Permissions
    if (!permissions || !permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return

    const command = commands.find(value => value.name === interaction.commandName)
    if (!command) return interaction.reply({content: 'Такой команды не существует!', ephemeral: true})

    try {
      command.execute(interaction)
    } catch (error) {
      console.error(error)
      return interaction.reply({content: 'При выполнении этой команды произошла ошибка!', ephemeral: true})
    }
    return
  }
}

export default event
