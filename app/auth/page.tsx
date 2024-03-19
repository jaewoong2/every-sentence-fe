"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { PageProps } from "@/.next/types/app/page"

import userStorage from "@/lib/storage/userstorage"
import useGetRegistLink from "@/hooks/useGetRegistLink"
import useGetUser from "@/hooks/useGetUser"

const TOKEN_KEY = process.env.NEXT_PUBLIC_JWT_TOKEN_KEY
const MY_PAGE_URL = "/"

const AuthPage = ({ searchParams }: PageProps) => {
  const { token } = searchParams
  const { data } = useGetRegistLink()
  const { data: userData } = useGetUser()
  const naviater = useRouter()

  const link = data?.data.data.link ?? ""

  if (token && TOKEN_KEY) {
    userStorage.setAccessToken(token)
  }

  useEffect(() => {
    if (userData?.data.data.slackId) {
      naviater.push(MY_PAGE_URL)
    }
  }, [userData, naviater])

  return (
    <main className="flex size-full flex-col items-center justify-center">
      <div className="py-4">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter">
          매일 문장
        </h2>
        <p className="text-muted-foreground">
          슬랙 가입하고 매일 문장 받아보기
        </p>
      </div>
      <Link href={link} className="text-sm text-blue-500">
        {link}
      </Link>
    </main>
  )
}

export default AuthPage
