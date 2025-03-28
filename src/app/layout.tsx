import "@/styles/base.css"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: { default: "Surefire", template: "%s | Surefire" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="mx-auto my-4 w-7/8 lg:w-6/8">{children}</main>
      </body>
    </html>
  )
}
