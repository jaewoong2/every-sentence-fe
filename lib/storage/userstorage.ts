import Storage from "./localstorage"

enum UserStorageKey {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
  USER_DATA = "userData",
}

type UserAttribute = {
  name: "nickname" | "email" | "profile"
  value: string
}

interface UserData {
  UserAttributes: UserAttribute[]
  UserName: string
}

class UserStorage extends Storage<UserStorageKey> {
  constructor() {
    super()
  }

  getAccessToken() {
    return this.get(UserStorageKey.ACCESS_TOKEN)
  }

  setAccessToken(accessToken: string) {
    this.set(UserStorageKey.ACCESS_TOKEN, accessToken)
  }

  getRefreshToken() {
    return this.get(UserStorageKey.REFRESH_TOKEN)
  }

  setRefreshToken(refreshToken: string) {
    this.set(UserStorageKey.REFRESH_TOKEN, refreshToken)
  }

  getUserData(): UserData | null {
    const data = this.get(UserStorageKey.USER_DATA)
    if (data) {
      return JSON.parse(data)
    }
    return null
  }

  setUserData(userData: UserData) {
    this.set(UserStorageKey.USER_DATA, JSON.stringify(userData))
  }

  clear() {
    this.clearItems([
      UserStorageKey.ACCESS_TOKEN,
      UserStorageKey.REFRESH_TOKEN,
      UserStorageKey.USER_DATA,
    ])
  }
}

const userStorage = new UserStorage()

export default userStorage
