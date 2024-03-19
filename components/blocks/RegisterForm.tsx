"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"

import usePostSendEmail from "@/hooks/usePostSendEmail"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { DialogFooter } from "../ui/dialog"
import { useToast } from "../ui/use-toast"

const RegistformSchema = z.object({
  nickname: z.string().min(2, {
    message: "닉네임은 2글자 이상 으로 작성해주세요",
  }),
  email: z.string().email({
    message: "이메일 형식을 지켜주세요.",
  }),
})

const LoginformSchema = z.object({
  nickname: z
    .string()
    .min(0, {
      message: "닉네임은 2글자 이상 으로 작성해주세요",
    })
    .optional(),
  email: z.string().email({
    message: "이메일 형식을 지켜주세요.",
  }),
})

type Props = {
  type: "login" | "new"
}

export function RegisterForm({ type }: Props) {
  const navigator = useRouter()
  const { toast } = useToast()
  const { mutate } = usePostSendEmail({
    onSuccess: () => {
      toast({
        title: "메일 전송 성공",
        description: "메일함을 확인 해주세요.",
      })
      navigator.back()
    },
  })

  const formOptions = useMemo(() => {
    if (type === "login") {
      return {
        schema: LoginformSchema,
        defaultValues: { email: "", nickname: "" },
      }
    }
    return {
      schema: RegistformSchema,
      defaultValues: { email: "", nickname: "" },
    }
  }, [type])

  const form = useForm<z.infer<(typeof formOptions)["schema"]>>({
    resolver: zodResolver(formOptions["schema"]),
    defaultValues: formOptions["defaultValues"],
  })

  async function onSubmit(data: z.infer<(typeof formOptions)["schema"]>) {
    mutate({
      email: data.email,
      name: data.nickname ?? "",
      redirectTo: window.location.origin + "/auth",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="sentence@examil.com" {...field} />
              </FormControl>
              <FormDescription>
                문장을 받아볼 이메일을 작성해주세요🤔
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {type === "new" && (
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input placeholder="닉네임" {...field} />
                </FormControl>
                <FormDescription>닉네임을 작성해주세요</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <DialogFooter>
          <Button type="submit">등록하기</Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
