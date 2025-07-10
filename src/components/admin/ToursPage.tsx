import { MoreHorizontal, PlusCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"


// mock data
const tours = [
    { name: 'Gozo Jeep Safari', category: 'Full Day', status: 'Active', price: '€95.00', bookings: 452 },
    { name: 'Comino Blue Lagoon Cruise', category: 'Half Day', status: 'Active', price: '€35.00', bookings: 1289 },
    { name: 'Valletta Walking Tour', category: 'Cultural', status: 'Active', price: '€20.00', bookings: 88 },
    { name: 'Harbour Cruise by Night', category: 'Evening', status: 'Inactive', price: '€25.00', bookings: 210 },
]

export default function ToursPage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Tours</h1>
        <div className="ml-auto flex items-center gap-2">
          {/* Create Tour Sheet */}
          <Sheet>
            <SheetTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Create Tour
                    </span>
                </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Create a New Tour</SheetTitle>
                <SheetDescription>
                    Add tour details, pricing, and set its status. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid items-center gap-1.5">
                  <Label htmlFor="name">Tour Name</Label>
                  <Input id="name" placeholder="e.g., Gozo Jeep Safari" />
                </div>
                <div className="grid items-center gap-1.5">
                  <Label htmlFor="price">Price (€)</Label>
                  <Input id="price" type="number" placeholder="95.00" />
                </div>
                <div className="grid items-center gap-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" placeholder="e.g., Full Day" />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                    <Switch id="status" defaultChecked={true} />
                    <Label htmlFor="status">Active on platform</Label>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save Tour</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Tour Catalog</CardTitle>
          <CardDescription>
            Manage your tours and their global settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tour Name</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:table-cell">Price</TableHead>
                <TableHead className="text-right">Total Bookings</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tours.map((tour) => (
                <TableRow key={tour.name}>
                  <TableCell className="font-medium">{tour.name}</TableCell>
                  <TableCell className="hidden md:table-cell">{tour.category}</TableCell>
                  <TableCell>
                    <Badge variant={tour.status === 'Active' ? 'default' : 'outline'}>
                      {tour.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{tour.price}</TableCell>
                  <TableCell className="text-right">{tour.bookings}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  )
}