"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  CalendarDays,
  Ticket,
  BellRing,
  ArrowRight,
  UserRound,
  ShieldCheck,
  UserPlus,
  Building2,
  QrCode,
  ListChecks,
  CheckCircle2,
} from "lucide-react"
import { useKisan } from "@/lib/kisan/store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const FEATURES = [
  {
    icon: CalendarDays,
    title: "Book a Time Slot",
    desc: "Reserve a convenient slot at your nearest procurement centre in seconds.",
  },
  {
    icon: Ticket,
    title: "Get a Digital Token",
    desc: "Receive a QR-based token with your position and estimated waiting time.",
  },
  {
    icon: BellRing,
    title: "Get Turn Notifications",
    desc: "Know exactly when your turn is approaching — no more waiting all day.",
  },
]

const STEPS = [
  { icon: UserPlus, title: "Register", desc: "Add your farmer details." },
  { icon: Building2, title: "Select Centre", desc: "Pick a procurement centre." },
  { icon: Ticket, title: "Get Token & Slot", desc: "Receive a digital token." },
  { icon: QrCode, title: "Scan QR at Centre", desc: "Mark your arrival instantly." },
  { icon: ListChecks, title: "Track Queue", desc: "Watch your turn approach live." },
  { icon: CheckCircle2, title: "Complete Procurement", desc: "Weigh, procure & get paid." },
]

export default function HomePage() {
  const { setRole, farmer } = useKisan()
  const router = useRouter()

  function startFarmer(path: string) {
    setRole("farmer")
    router.push(path)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              Government Agricultural Procurement
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Skip the Queue. <span className="text-primary">Know Your Turn.</span>
            </h1>
            <p className="max-w-md text-pretty text-lg text-muted-foreground">
              Book your procurement slot, track your token, and receive updates
              without waiting all day at the centre.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => startFarmer(farmer ? "/centres" : "/register")}
              >
                Book a Token <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => startFarmer("/token")}
              >
                Track My Token
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-sm rounded-2xl border bg-card p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  YOUR TOKEN
                </span>
                <span className="rounded-full bg-warning/15 px-2.5 py-0.5 text-xs font-medium text-warning-foreground">
                  Waiting
                </span>
              </div>
              <p className="mt-2 text-5xl font-bold text-primary">#147</p>
              <p className="text-sm text-muted-foreground">XYZ Procurement Centre</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-muted/60 p-3">
                  <p className="text-muted-foreground">Farmers Ahead</p>
                  <p className="text-xl font-semibold">12</p>
                </div>
                <div className="rounded-lg bg-muted/60 p-3">
                  <p className="text-muted-foreground">Est. Wait</p>
                  <p className="text-xl font-semibold">45 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <Card key={f.title} className="border-border/70">
                <CardContent className="space-y-3 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              How KisanQueue Works
            </h2>
            <p className="mt-2 text-muted-foreground">
              Six simple steps from registration to payment.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="flex items-start gap-4 rounded-xl border bg-card p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-primary">
                      Step {i + 1}
                    </p>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Role selector */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Choose a Demo Interface
          </h2>
          <p className="mt-2 text-muted-foreground">
            No login required — explore either side of KisanQueue.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="group border-border/70 transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col gap-4 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/12 text-success">
                <UserRound className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">I am a Farmer</h3>
                <p className="text-sm text-muted-foreground">
                  Register, book a slot, get a token and track your live queue.
                </p>
              </div>
              <Button
                className="mt-auto w-fit gap-2"
                onClick={() => startFarmer(farmer ? "/dashboard" : "/register")}
              >
                Enter Farmer View <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group border-border/70 transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col gap-4 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-info/12 text-info">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">I am an Officer</h3>
                <p className="text-sm text-muted-foreground">
                  Manage the live queue, process farmers and initiate payments.
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-auto w-fit gap-2"
                onClick={() => {
                  setRole("officer")
                  router.push("/officer")
                }}
              >
                Enter Officer View <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>KisanQueue — Smart Procurement Token & Queue Management</p>
          <p>Prototype for demonstration purposes.</p>
        </div>
      </footer>
    </div>
  )
}
