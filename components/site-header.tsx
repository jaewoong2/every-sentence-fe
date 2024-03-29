import Link from "next/link"
import { UserCog } from "lucide-react"

import { siteConfig } from "@/config/site"
import userStorage from "@/lib/storage/userstorage"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import SideNav from "./blocks/SideNav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <SideNav />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
