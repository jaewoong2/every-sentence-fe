"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { RegisterForm } from "./RegisterForm"

type Props = {
  type: "new" | "login"
}

function isRightRegistType(type: string): type is "new" | "login" {
  if (type === "new") return true
  if (type === "login") return true
  return false
}

export function RegisterModal({ type }: Props) {
  const [mount, setMount] = useState(false)
  const [open, setOpen] = useState(false)
  const naviagte = useRouter()

  useEffect(() => {
    setMount(true)
  }, [])

  useEffect(() => {
    setOpen(isRightRegistType(type))
  }, [type])

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          naviagte.back()
        }
        setOpen(isOpen)
      }}
    >
      <DialogTrigger asChild>
        <Link className={buttonVariants()} href={"?regist=new"}>
          등록하기
        </Link>
      </DialogTrigger>
      {mount && open && (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>매일 문장 등록하기</DialogTitle>
            <DialogDescription>
              매일 매일 원하는 시간에 문장을 받아봐요
            </DialogDescription>
          </DialogHeader>
          <RegisterForm type={type} />
        </DialogContent>
      )}
    </Dialog>
  )
}
