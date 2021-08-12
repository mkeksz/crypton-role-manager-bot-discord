const ephemeral = true

const replies = {
  ACTIVATED: {content: 'Автоматическое назначение ролей запущено!', ephemeral},
  DEACTIVATED: {content: 'Автоматическое назначение ролей остановлено!', ephemeral},
  FIRST_SET_ROLE: {content: 'Сперва укажите роль участников Crypton Academy! \nИспользуйте команду: /set_role', ephemeral},
  SET_ROLE: {content: 'Укажите роль!', ephemeral},
  ROLE_ASSIGNED: (nameRole: string) => {
    return {content: `Теперь участникам Crypton Academy будет назначаться роль ${nameRole}!`, ephemeral: true}
  },
  INFO: (role: string | undefined, active: boolean | undefined) => {
    return {
      content: `Назначенная роль: ${role ?? 'Отсутствует'} \nСтатус бота: ${active ? 'Активен' : 'Неактивен'}`,
      ephemeral: true
    }
  }
}

export default replies
