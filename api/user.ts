import instance from "./instance"

export type SendEmailRequestData = {
  email: string
  redirectTo: string
  name?: string
}

export type GetRegistLinkResponse = {
  data: {
    link: string
  }
}

export type GetUserResponse = {
  data: {
    id: number
    phone_number: string
    name: string
    email: string
    slackId: string
    level: string
    refresh_token: string
    access_token: string
  }
}

export type SendEmailResponse = {}

class UserAPI {
  private REGIST_USER = "/api/auth/login-email"
  private GET_REGIST_LINK = `/api/auth/regist-link`
  private GET_USER = `/api/auth/login-user`

  signInOrLogin = (data: SendEmailRequestData) =>
    instance.post<SendEmailResponse>(this.REGIST_USER, data)

  getRegistLink = () =>
    instance.get<GetRegistLinkResponse>(`${this.GET_REGIST_LINK}`)

  getUser = () => instance.get<GetUserResponse>(`${this.GET_USER}`)
}

export const api = new UserAPI()
