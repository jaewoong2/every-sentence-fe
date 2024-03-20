import axios, { AxiosError, AxiosInstance } from "axios"

import userStorage from "@/lib/storage/userstorage"

const JWT_TOKEN_KEY = process.env.JWT_TOKEN_KEY
const API_BASEURL = process.env.API_BASEURL

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log("interceptor > error", error)
      return Promise.reject(error)
    }
  )

  instance.interceptors.request.use(
    (config) => {
      if (typeof window === "undefined") return config
      if (typeof localStorage === "undefined") return config
      if (!JWT_TOKEN_KEY) return config

      const token = userStorage.getAccessToken()

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error: AxiosError) => {
      Promise.reject(error)
    }
  )
}

const createInstance = () => {
  const instance = axios.create({
    timeout: 2000,
  })

  setInterceptors(instance)

  return instance
}

export default createInstance()
