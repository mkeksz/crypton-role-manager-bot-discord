import {DataTypes} from 'sequelize'
import {ModelCreator} from './types'

export const guildModelCreator: ModelCreator = [
  'Guild',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    roleID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }
]

export interface GuildModel {
  id: string,
  roleID: string | null,
  active: boolean
}
