"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { FiUser } from "react-icons/fi"

import userStorage from "@/lib/storage/userstorage"

import { buttonVariants } from "../ui/button"
import { MenuNavigationDropdown } from "./MenuNavigationDropdown"

const SideNav = () => {
  const [mount, setMount] = useState(false)
  const accessToken = userStorage.getAccessToken()

  useEffect(() => {
    setMount(true)
  }, [])

  if (!mount) return null

  return (
    <>
      {accessToken ? (
        <MenuNavigationDropdown />
      ) : (
        <Link href={"?regist=login"}>
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
              className: "font-black",
            })}
          >
            로그인
            <span className="sr-only">Login</span>
          </div>
        </Link>
      )}
    </>
  )
}

export default SideNav
