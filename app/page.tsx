import { PageProps } from "@/.next/types/app/page"

import { RegisterModal } from "@/components/blocks/RegisterModal"

export default function IndexPage({ searchParams }: PageProps) {
  const { regist } = searchParams

  return (
    <main className="container grid h-full grid-cols-2 max-lg:grid-cols-1">
      <section className="container grid h-full items-center gap-0 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Simple. Fast. Everyday. <br className="hidden sm:inline" />
            매일 일본어 문장을 받아봐요
          </h1>
          <div>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              지금 등록 하시면, 무료로 일본어 문장을 매일 받아 보실 수 있어요.
            </p>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              今登録すれば、無料で日本語の文章を毎日受け取ることができます。
            </p>
            <div className="flex gap-4 py-8">
              <RegisterModal type={regist} />
            </div>
          </div>
        </div>
      </section>
      <section className="container grid h-full items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <img
          src="slack.png"
          alt="slack"
          className="h-full w-auto object-contain"
        />
      </section>
    </main>
  )
}
