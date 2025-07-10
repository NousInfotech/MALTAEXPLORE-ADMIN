"use client" 

import React, { useState, useMemo } from "react"
import {
  ArrowLeft,
  ArrowRight,
  BookCopy,
  Calendar as CalendarIcon,
  ChevronDown,
  CreditCard,
  Landmark,
  Ticket,
  UserPlus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

// --- MOCK DATA ---

const mockActivityData = [
  { id: 1, type: "reseller_created", details: 'New Reseller "Malta Suites" joined.', timestamp: "5 mins ago" },
  { id: 2, type: "booking", details: 'Booking #12346 (€150) made by "ABC Hotel".', timestamp: "12 mins ago" },
  { id: 3, type: "payout_request", details: 'Payout of €1,200 requested by "Gozo Tours Ltd".', timestamp: "1 hour ago" },
  { id: 4, type: "booking", details: 'Booking #12345 (€75) made by "Valletta Concierge".', timestamp: "3 hours ago" },
  { id: 5, type: "booking", details: 'Booking #12344 (€220) made by "SunBreeze Agency".', timestamp: "5 hours ago" },
  { id: 6, type: "reseller_created", details: 'New Reseller "Island Hoppers" joined.', timestamp: "yesterday" },
  { id: 7, type: "payout_processed", details: 'Payout of €3,500 to "ABC Hotel" was processed.', timestamp: "yesterday" },
  { id: 8, type: "booking", details: 'Booking #12343 (€95) made by "Gozo Tours Ltd".', timestamp: "2 days ago" },
  { id: 9, type: "payout_request", details: 'Payout of €850 requested by "Valletta Concierge".', timestamp: "2 days ago" },
  { id: 10, type: "booking", details: 'Booking #12342 (€310) made by "ABC Hotel".', timestamp: "3 days ago" },
  { id: 11, type: "booking", details: 'Booking #12341 (€180) made by "SunBreeze Agency".', timestamp: "3 days ago" },
  { id: 12, type: "payout_processed", details: 'Payout of €2,100 to "Gozo Tours Ltd" was processed.', timestamp: "4 days ago" },
  { id: 13, type: "reseller_created", details: 'New Reseller "Holiday Planners" joined.', timestamp: "5 days ago" },
  { id: 14, type: "booking", details: 'Booking #12340 (€55) made by "Valletta Concierge".', timestamp: "5 days ago" },
  { id: 15, type: "payout_request", details: 'Payout of €1,500 requested by "SunBreeze Agency".', timestamp: "6 days ago" },
];

// --- HELPER FUNCTION ---
// To get the right icon and style for each activity type
const getActivityUi = (type: string) => {
  switch (type) {
    case "booking":
      return {
        Icon: Ticket,
        bgColor: "bg-green-100 dark:bg-green-900/50",
        iconColor: "text-green-600 dark:text-green-400",
      }
    case "reseller_created":
      return {
        Icon: UserPlus,
        bgColor: "bg-blue-100 dark:bg-blue-900/50",
        iconColor: "text-blue-600 dark:text-blue-400",
      }
    case "payout_request":
      return {
        Icon: Landmark,
        bgColor: "bg-orange-100 dark:bg-orange-900/50",
        iconColor: "text-orange-600 dark:text-orange-400",
      }
    case "payout_processed":
      return {
        Icon: CreditCard,
        bgColor: "bg-purple-100 dark:bg-purple-900/50",
        iconColor: "text-purple-600 dark:text-purple-400",
      }
    default:
      return {
        Icon: BookCopy,
        bgColor: "bg-gray-100 dark:bg-gray-700",
        iconColor: "text-gray-600 dark:text-gray-400",
      }
  }
}

// --- MAIN COMPONENT ---
export default function RecentActivityPage() {
  const [filterType, setFilterType] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  const filteredData = useMemo(() => {
    if (filterType === "all") {
      return mockActivityData
    }
    return mockActivityData.filter(activity => activity.type.startsWith(filterType))
  }, [filterType])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const filterTypeLabels: { [key: string]: string } = {
    all: "All Types",
    booking: "Bookings",
    reseller: "Resellers",
    payout: "Payouts",
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <main className="flex flex-1 flex-col gap-4 p-4 sm:p-6 md:gap-8 md:p-8">
        <div className="flex items-center gap-4">
             <Link href="/dashboard/overview">
                <Button variant="outline" size="icon" className="h-7 w-7">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
            </Link>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Recent Activity
            </h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
            <CardDescription>
              A comprehensive log of all recent system activities.
            </CardDescription>
            {/* --- Filter Controls --- */}
            <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    {filterTypeLabels[filterType]}
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => setFilterType("all")}>All Types</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterType("booking")}>Bookings</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterType("reseller")}>Resellers</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterType("payout")}>Payouts</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Note: This is a placeholder for a date range picker. 
                  You would integrate a component like shadcn's Date Range Picker here. */}
              <Button id="date" variant={"outline"} className="w-full sm:w-auto">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Filter by date...</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Separator className="mb-6" />
            <div className="space-y-6">
              {paginatedData.length > 0 ? (
                paginatedData.map((activity) => {
                  const { Icon, bgColor, iconColor } = getActivityUi(activity.type)
                  return (
                    <div key={activity.id} className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bgColor}`}>
                        <Icon className={`h-5 w-5 ${iconColor}`} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-medium leading-tight">{activity.details}</p>
                      </div>
                      <div className="ml-auto flex-shrink-0 text-right">
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="text-center py-10">
                    <p className="text-muted-foreground">No activities found for the selected filter.</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            {/* --- Pagination Controls --- */}
            <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
              <div>
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                   <span className="hidden sm:inline">Next</span>
                  <ArrowRight className="h-4 w-4 ml-1 sm:ml-2" />
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}