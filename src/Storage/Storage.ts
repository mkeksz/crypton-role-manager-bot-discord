import {ModelCtor, Options, Sequelize} from 'sequelize'
import guildModel from './models/guild'
import config from '../../config'

const OPTIONS_SEQUELIZE: Options = {
  dialect: 'sqlite',
  storage: config.PATH_TO_ROOT_DIR + '/database.sqlite',
  logging: false
}

export default class Storage {
  private readonly database: Sequelize
  private readonly Guilds: ModelCtor<any>

  public constructor() {
    this.database = new Sequelize(OPTIONS_SEQUELIZE)
    this.Guilds = this.database.define(...guildModel)
  }

  public async syncModels(): Promise<void> {
    await this.Guilds.sync({force: true})
  }

  public async addGuild(id: string, roleAcademyID: string): Promise<void> {
    await this.Guilds.create({id, role_academy_id: roleAcademyID, active: false})
  }

  public async editGuild(id: string, roleAcademyID: string, active: boolean): Promise<void> {
    await this.Guilds.update({role_academy_id: roleAcademyID, active}, {where: {id}})
  }

  public async getGuild(id: string): Promise<GuildModel | undefined> {
    const guild = await this.Guilds.findOne({where: {id}})
    if (!guild) return undefined
    return {id: guild.id, roleAcademyID: guild.role_academy_id, active: guild.active}
  }
}
