export default class CryptonData {
  public isMember(tagUserDiscord: string): boolean {
    const result = Math.random() < 0.5
    console.log(tagUserDiscord + ' isMember:', result)
    return result
  }
}
