import { Api } from './config'

export class userService {
  static async getAllUsers() {
    const { data } = await Api.get('users')
    return data
  }
}
