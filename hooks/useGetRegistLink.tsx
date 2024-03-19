import { GetRegistLinkResponse, api } from "@/api/user"
import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import userStorage from "@/lib/storage/userstorage"

const useGetRegistLink = (
  options?: Omit<
    UseQueryOptions<AxiosResponse<GetRegistLinkResponse>>,
    "queryKey" | "queryFn"
  >
) => {
  const accessToken = userStorage.getAccessToken()
  return useQuery({
    ...options,
    queryKey: [`getRegistLink/${accessToken}`],
    queryFn: api.getRegistLink,
  })
}

export default useGetRegistLink
