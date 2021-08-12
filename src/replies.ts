const ephemeral = true

const replies = {
  ONLY_SERVER: {content: 'Эту команду можно использовать только на сервере!', ephemeral},
  ACTIVATED: {content: 'Автоматическое назначение ролей запущено!', ephemeral},
  DEACTIVATED: {content: 'Автоматическое назначение ролей остановлено!', ephemeral},
  FIRST_SET_ROLE: {content: 'Сперва укажите роль участников Crypton Academy командой "/set_role @роль"!', ephemeral},
  SET_ROLE: {content: 'Укажите назначаемую роль!', ephemeral},
  ROLE_ASSIGNED: (nameRole: string) => {
    return {content: `Теперь участникам Crypton Academy будет назначаться роль ${nameRole}!`, ephemeral: true}
  },
  INFO: (role: string | null, active: boolean) => {
    return {content: `Назначенная роль: ${role} \nСтатус бота: ${active ? 'Активен' : 'Неактивен'}`, ephemeral: true}
  }
}

export default replies
