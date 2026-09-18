import Link from "next/link"
import { Wheat, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary">
        <Wheat className="h-8 w-8" />
      </span>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
      </div>
      <Button asChild className="gap-2">
        <Link href="/">
          <Home className="h-4 w-4" /> Back to Home
        </Link>
      </Button>
    </div>
  )
}
