import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

export default {
    TOKEN: process.env['TOKEN_DISCORD_BOT'] as string,
    PATH_TO_ROOT_DIR: path.parse(__dirname).dir
}
