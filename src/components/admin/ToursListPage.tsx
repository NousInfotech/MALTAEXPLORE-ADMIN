import { MoreHorizontal, PlusCircle } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// In a real app, this data would be fetched from your API
const tours = [
    { id: 1, name: 'Gozo Jeep Safari', category: 'Full Day', status: 'Active', price: '€95.00', bookings: 452 },
    { id: 2, name: 'Comino Blue Lagoon Cruise', category: 'Half Day', status: 'Active', price: '€35.00', bookings: 1289 },
    { id: 3, name: 'Valletta Walking Tour', category: 'Cultural', status: 'Active', price: '€20.00', bookings: 88 },
    { id: 4, name: 'Harbour Cruise by Night', category: 'Evening', status: 'Inactive', price: '€25.00', bookings: 210 },
];

export default function ToursListPage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <h1 className="text-lg font-semibold md:text-2xl">Tours</h1>
        <div className="ml-auto flex items-center gap-2">
          {/* Link to the Create New Tour page */}
          <Button size="sm" className="h-8 gap-1" asChild>
            <Link href="/dashboard/tours/new">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Create New Tour
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <Card className="container shrink-0 overflow-x-auto py-10">
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
                <TableHead className="hidden sm:table-cell">Price</TableHead>
                <TableHead>Global Status</TableHead>
                <TableHead className="hidden lg:table-cell text-right">Total Bookings</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tours.map((tour) => (
                <TableRow key={tour.id}>
                  <TableCell className="font-medium">{tour.name}</TableCell>
                  <TableCell className="hidden md:table-cell">{tour.category}</TableCell>
                  <TableCell className="hidden sm:table-cell">{tour.price}</TableCell>
                  <TableCell>
                    <Badge variant={tour.status === 'Active' ? 'default' : 'outline'}>
                      {tour.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-right">{tour.bookings}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        {/*  this would link to /admin/tours/[id]/edit */}
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-4</strong> of <strong>15</strong> tours
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}