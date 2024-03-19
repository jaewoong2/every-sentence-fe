import { SendEmailRequestData, SendEmailResponse, api } from "@/api/user"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

type UsePostSendEmail = Omit<
  UseMutationOptions<
    UsePostSendEmailGeneric["Data"],
    UsePostSendEmailGeneric["Error"],
    UsePostSendEmailGeneric["Variables"]
  >,
  "mutationFn"
>

type UsePostSendEmailGeneric = {
  Data: AxiosResponse<SendEmailResponse>
  Error: AxiosError
  Variables: SendEmailRequestData
}

const usePostSendEmail = (options?: UsePostSendEmail) => {
  return useMutation<
    UsePostSendEmailGeneric["Data"],
    UsePostSendEmailGeneric["Error"],
    UsePostSendEmailGeneric["Variables"]
  >({
    ...options,
    mutationFn: api.signInOrLogin,
  })
}

export default usePostSendEmail
