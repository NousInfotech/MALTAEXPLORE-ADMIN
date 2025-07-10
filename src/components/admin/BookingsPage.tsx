'use client';

import { useState } from 'react';
import {
  File,
  ListFilter,
  MoreHorizontal,
  Pencil,
  Search,
  Trash2,
  View
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { Textarea } from '@/components/ui/textarea';

// Define a more detailed type for a booking
interface Booking {
  id: string;
  tour: string;
  reseller: string;
  date: string;
  status: 'Confirmed' | 'Paid' | 'Cancelled';
  customerName: string;
  customerEmail: string;
  participants: number;
  notes?: string;
}

// Enhanced mock data for more detailed modals
const bookings: Booking[] = [
  {
    id: '#12346',
    tour: 'Gozo Jeep Safari',
    reseller: 'ABC Hotel',
    date: '2023-10-28',
    status: 'Confirmed',
    customerName: 'Alice Johnson',
    customerEmail: 'alice.j@example.com',
    participants: 2,
    notes: 'Customer requested a front seat if possible.'
  },
  {
    id: '#12345',
    tour: 'Blue Lagoon Cruise',
    reseller: 'Gozo Tours Ltd',
    date: '2023-10-28',
    status: 'Confirmed',
    customerName: 'Bob Williams',
    customerEmail: 'bob.w@example.com',
    participants: 4
  },
  {
    id: '#12344',
    tour: 'Valletta Walking Tour',
    reseller: 'Direct',
    date: '2023-10-27',
    status: 'Paid',
    customerName: 'Carla Davis',
    customerEmail: 'carla.d@example.com',
    participants: 1,
    notes: 'Paid in full via credit card.'
  },
  {
    id: '#12343',
    tour: 'Gozo Jeep Safari',
    reseller: 'SunBreeze Agency',
    date: '2023-10-27',
    status: 'Cancelled',
    customerName: 'David Miller',
    customerEmail: 'david.m@example.com',
    participants: 3
  },
  {
    id: '#12342',
    tour: 'Mdina Historical Tour',
    reseller: 'ABC Hotel',
    date: '2023-10-26',
    status: 'Confirmed',
    customerName: 'Eva Garcia',
    customerEmail: 'eva.g@example.com',
    participants: 2
  }
];

// --- MODAL COMPONENTS ---

// 1. View Details Dialog
function BookingDetailsDialog({
  booking,
  open,
  onOpenChange
}: {
  booking: Booking;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!booking) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle>Booking Details: {booking.id}</DialogTitle>
          <DialogDescription>
            Full information for the booking on {booking.date}.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2'>
            <div className='text-sm'>
              <p className='text-muted-foreground'>Customer Name</p>
              <p className='font-medium'>{booking.customerName}</p>
            </div>
            <div className='text-sm'>
              <p className='text-muted-foreground'>Customer Email</p>
              <p className='font-medium'>{booking.customerEmail}</p>
            </div>
            <div className='mt-2 text-sm'>
              <p className='text-muted-foreground'>Tour</p>
              <p className='font-medium'>{booking.tour}</p>
            </div>
            <div className='mt-2 text-sm'>
              <p className='text-muted-foreground'>Reseller</p>
              <p className='font-medium'>{booking.reseller}</p>
            </div>
            <div className='mt-2 text-sm'>
              <p className='text-muted-foreground'>Participants</p>
              <p className='font-medium'>{booking.participants}</p>
            </div>
            <div className='mt-2 text-sm'>
              <p className='text-muted-foreground'>Status</p>
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
            </div>
          </div>
          {booking.notes && (
            <div className='mt-2 text-sm'>
              <p className='text-muted-foreground'>Notes</p>
              <p className='bg-muted rounded-md p-3 font-medium'>
                {booking.notes}
              </p>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button
            type='button'
            variant='outline'
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// 2. Edit Booking Dialog
function EditBookingDialog({
  booking,
  open,
  onOpenChange,
  onSave
}: {
  booking: Booking;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (updatedBooking: Booking) => void;
}) {
  const [editedBooking, setEditedBooking] = useState<Booking>(booking);

  if (!booking) return null;

  const handleSave = () => {
    // we willcall an API here.
    console.log('Saving booking:', editedBooking);
    onSave(editedBooking);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle>Edit Booking: {booking.id}</DialogTitle>
          <DialogDescription>
            Update the details for this booking. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-2'>
            <Label htmlFor='participants' className='sm:text-right'>
              Participants
            </Label>
            <Input
              id='participants'
              type='number'
              value={editedBooking.participants}
              onChange={(e) =>
                setEditedBooking({
                  ...editedBooking,
                  participants: parseInt(e.target.value) || 0
                })
              }
              className='col-span-1 sm:col-span-1'
            />
          </div>
          <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-2'>
            <Label htmlFor='status' className='sm:text-right'>
              Status
            </Label>
            {/*  use a Select component here */}
            <Input
              id='status'
              value={editedBooking.status}
              // For simplicity, using text input. A Select would be better.
              onChange={(e) =>
                setEditedBooking({
                  ...editedBooking,
                  status: e.target.value as Booking['status']
                })
              }
              className='col-span-1 sm:col-span-1'
            />
          </div>
          <div className='grid grid-cols-1 items-start gap-4 sm:grid-cols-2'>
            <Label htmlFor='notes' className='pt-2 sm:text-right'>
              Notes
            </Label>
            <Textarea
              id='notes'
              value={editedBooking.notes || ''}
              onChange={(e) =>
                setEditedBooking({ ...editedBooking, notes: e.target.value })
              }
              className='col-span-1 sm:col-span-1'
              placeholder='Add any internal notes...'
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type='button'
            variant='outline'
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button type='button' onClick={handleSave}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// 3. Cancel Booking Dialog
function CancelBookingDialog({
  booking,
  open,
  onOpenChange,
  onConfirm
}: {
  booking: Booking;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (id: string) => void;
}) {
  if (!booking) return null;

  const handleConfirm = () => {
    // will call an API here.
    console.log('Cancelling booking:', booking.id);
    onConfirm(booking.id);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This will permanently cancel booking <strong>{booking.id}</strong>{' '}
            for <strong>{booking.tour}</strong>. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='sm:justify-end'>
          <Button
            type='button'
            variant='outline'
            onClick={() => onOpenChange(false)}
          >
            Keep Booking
          </Button>
          <Button type='button' variant='destructive' onClick={handleConfirm}>
            Confirm Cancellation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function BookingsPage() {
  
  const [modalState, setModalState] = useState<{
    type: 'view' | 'edit' | 'cancel' | null;
    data: Booking | null;
  }>({ type: null, data: null });

  // this would be managed via API calls and state management library
  const [currentBookings, setCurrentBookings] = useState<Booking[]>(bookings);

  const handleSaveBooking = (updatedBooking: Booking) => {
    setCurrentBookings((prev) =>
      prev.map((b) => (b.id === updatedBooking.id ? updatedBooking : b))
    );
  };

  const handleConfirmCancel = (bookingId: string) => {
    setCurrentBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: 'Cancelled' } : b))
    );
  };

  const handleCloseModal = () => {
    setModalState({ type: null, data: null });
  };

  return (
    <>
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
          <div className='flex w-full items-center gap-2 sm:w-auto'>
            <div className='relative flex-1 sm:flex-initial'>
              <Search className='text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4' />
              <Input
                type='search'
                placeholder='Search by ID, Customer...'
                className='w-full pl-8 sm:w-[200px] lg:w-[300px]'
              />
            </div>
            <Button variant='outline' className='gap-1.5'>
              <ListFilter className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                Filter
              </span>
            </Button>
            {/* Add New Booking Button can be added here */}
            {/* <Button>Add Booking</Button> */}
          </div>
        </div>
        <Card className='container shrink-0 overflow-x-auto'>
          <CardContent className='pt-6'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Tour Name</TableHead>
                  <TableHead className='hidden sm:table-cell'>
                    Reseller
                  </TableHead>
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
                {currentBookings.map((booking) => (
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
                          <DropdownMenuItem
                            onSelect={() =>
                              setModalState({ type: 'view', data: booking })
                            }
                          >
                            <View className='mr-2 h-4 w-4' />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onSelect={() =>
                              setModalState({ type: 'edit', data: booking })
                            }
                            disabled={booking.status === 'Cancelled'}
                          >
                            <Pencil className='mr-2 h-4 w-4' />
                            Edit Booking
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onSelect={() =>
                              setModalState({ type: 'cancel', data: booking })
                            }
                            className='text-red-600 focus:text-red-600'
                            disabled={booking.status === 'Cancelled'}
                          >
                            <Trash2 className='mr-2 h-4 w-4' />
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
            <div className='text-muted-foreground text-xs whitespace-nowrap'>
              Showing <strong>1-5</strong> of <strong>{bookings.length}</strong>
              &nbsp;bookings
            </div>
            <Pagination className='ml-auto'>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href='#' />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href='#' />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </main>

      {/* Render Modals based on state */}
      {modalState.type === 'view' && modalState.data && (
        <BookingDetailsDialog
          booking={modalState.data}
          open={modalState.type === 'view'}
          onOpenChange={(open) => !open && handleCloseModal()}
        />
      )}

      {modalState.type === 'edit' && modalState.data && (
        <EditBookingDialog
          booking={modalState.data}
          open={modalState.type === 'edit'}
          onOpenChange={(open) => !open && handleCloseModal()}
          onSave={handleSaveBooking}
        />
      )}

      {modalState.type === 'cancel' && modalState.data && (
        <CancelBookingDialog
          booking={modalState.data}
          open={modalState.type === 'cancel'}
          onOpenChange={(open) => !open && handleCloseModal()}
          onConfirm={handleConfirmCancel}
        />
      )}
    </>
  );
}
