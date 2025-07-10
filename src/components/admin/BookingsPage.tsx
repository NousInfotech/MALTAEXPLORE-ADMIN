import { ListFilter, MoreHorizontal, Search } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

// mock data
const bookings = [
  {
    id: '#12346',
    tour: 'Gozo Jeep Safari',
    reseller: 'ABC Hotel',
    date: '2023-10-28',
    status: 'Confirmed'
  },
  {
    id: '#12345',
    tour: 'Blue Lagoon Cruise',
    reseller: 'Gozo Tours Ltd',
    date: '2023-10-28',
    status: 'Confirmed'
  },
  {
    id: '#12344',
    tour: 'Valletta Walking Tour',
    reseller: 'Direct',
    date: '2023-10-27',
    status: 'Paid'
  },
  {
    id: '#12343',
    tour: 'Gozo Jeep Safari',
    reseller: 'SunBreeze Agency',
    date: '2023-10-27',
    status: 'Cancelled'
  },
  {
    id: '#12342',
    tour: 'Mdina Historical Tour',
    reseller: 'ABC Hotel',
    date: '2023-10-26',
    status: 'Confirmed'
  }
];

export default function BookingsPage() {
  return (
    <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
        <div className='flex-1'>
          <h1 className='text-lg font-semibold md:text-2xl'>
            Booking Management
          </h1>
          <p className='text-muted-foreground mt-1 text-sm'>
            Search, view, and manage all bookings across the platform.
          </p>
        </div>
        {/* FILTERS: Stacks on mobile, row on desktop */}
        <div className='flex w-full items-center gap-2 sm:w-auto'>
          <div className='relative flex-1 sm:flex-initial'>
            <Search className='text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4' />
            <Input
              type='search'
              placeholder='Search by ID, Customer...'
              className='w-full pl-8 sm:w-[200px] lg:w-[300px]'
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='sm' className='h-9 gap-1'>
                <ListFilter className='h-3.5 w-3.5' />
                <span className='sr-only sm:not-sr-only'>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Tour</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Date Range</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Status</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Card>
        <CardContent className='pt-6'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Tour Name</TableHead>
                <TableHead className='hidden sm:table-cell'>Reseller</TableHead>
                <TableHead className='hidden md:table-cell'>
                  Booking Date
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className='sr-only'>Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className='font-medium'>{booking.id}</TableCell>
                  <TableCell>{booking.tour}</TableCell>
                  <TableCell className='hidden sm:table-cell'>
                    {booking.reseller}
                  </TableCell>
                  <TableCell className='hidden md:table-cell'>
                    {booking.date}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        booking.status === 'Cancelled'
                          ? 'destructive'
                          : booking.status === 'Paid'
                            ? 'default'
                            : 'secondary'
                      }
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup='true'
                          size='icon'
                          variant='ghost'
                        >
                          <MoreHorizontal className='h-4 w-4' />
                          <span className='sr-only'>Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Details (👁️)</DropdownMenuItem>
                        <DropdownMenuItem>Edit Booking (✏️)</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='text-red-600'>
                          Cancel Booking
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className='text-muted-foreground text-xs'>
            Showing <strong>1-5</strong> of <strong>1,234</strong> bookings
          </div>
          <Pagination className='ml-auto'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              {/* Pagination numbers would be generated dynamically */}
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </main>
  );
}
