"use client"

import React, { PropsWithChildren, useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const QueryProvider = ({ children }: PropsWithChildren) => {
  const [client] = useState(new QueryClient())

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryProvider
