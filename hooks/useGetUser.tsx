import { GetUserResponse, api } from "@/api/user"
import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import userStorage from "@/lib/storage/userstorage"

const useGetUser = (
  options?: Omit<
    UseQueryOptions<AxiosResponse<GetUserResponse>>,
    "queryKey" | "queryFn"
  >
) => {
  const accessToken = userStorage.getAccessToken()
  return useQuery({
    ...options,
    queryKey: [`getUser/${accessToken}`],
    queryFn: api.getUser,
  })
}

export default useGetUser
