import { ListFilter } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// mock data
const pendingPayouts = [
  {
    name: 'Gozo Tours Ltd.',
    amount: '€1,200.00',
    requested: '2023-10-26',
    method: 'Bank: ••••1234'
  },
  {
    name: 'ABC Hotel',
    amount: '€850.50',
    requested: '2023-10-26',
    method: 'PayPal: a@b.com'
  },
  {
    name: 'Valletta Concierge',
    amount: '€230.00',
    requested: '2023-10-25',
    method: 'Revolut: @valconcierge'
  }
];

const payoutHistory = [
  {
    name: 'SunBreeze Agency',
    amount: '€975.00',
    paidOn: '2023-10-15',
    method: 'Bank: ••••5678'
  },
  {
    name: 'ABC Hotel',
    amount: '€1,120.00',
    paidOn: '2023-10-15',
    method: 'PayPal: a@b.com'
  },
  {
    name: 'Gozo Tours Ltd.',
    amount: '€1,500.00',
    paidOn: '2023-09-28',
    method: 'Bank: ••••1234'
  }
];

export default function PayoutsPage() {
  return (
    <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <Tabs
        defaultValue='pending'
        className='container shrink-0 overflow-x-auto'
      >
        <div className='flex items-center'>
          <TabsList>
            {/* The count in the tab is a key UX detail from the reference */}
            <TabsTrigger className='mr-2' value='pending'>
              Pending Requests ({pendingPayouts.length})
            </TabsTrigger>
            <TabsTrigger className='mr-2' value='history'>
              Payout History
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Pending Requests Tab */}
        <TabsContent value='pending'>
          <Card>
            <CardHeader>
              <CardTitle>Pending Payouts</CardTitle>
              <CardDescription>
                Review and process outstanding payout requests from resellers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reseller Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className='hidden md:table-cell'>
                      Requested On
                    </TableHead>
                    <TableHead className='hidden sm:table-cell'>
                      Payout Method
                    </TableHead>
                    <TableHead className='text-right'>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingPayouts.map((payout) => (
                    <TableRow key={payout.name}>
                      <TableCell className='font-medium'>
                        {payout.name}
                      </TableCell>
                      <TableCell>{payout.amount}</TableCell>
                      <TableCell className='hidden md:table-cell'>
                        {payout.requested}
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        {payout.method}
                      </TableCell>
                      <TableCell className='text-right'>
                        {/* A confirmation dialog  */}
                        <Button size='sm'>Mark as Paid</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payout History Tab */}
        <TabsContent value='history'>
          <Card>
            <CardHeader>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div>
                  <CardTitle>Payout History</CardTitle>
                  <CardDescription>
                    A complete log of all past payouts.
                  </CardDescription>
                </div>
                {/* Filters for the history table, responsive by default */}
                <div className='flex items-center gap-2'>
                  <Input
                    placeholder='Search Reseller...'
                    className='w-full sm:w-auto'
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='outline' size='sm' className='h-9 gap-1'>
                        <ListFilter className='h-3.5 w-3.5' />
                        <span className='sr-only sm:not-sr-only'>Date</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuLabel>Filter by Date</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Last 30 Days
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Last 90 Days
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        This Year
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reseller Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className='hidden md:table-cell'>
                      Paid On
                    </TableHead>
                    <TableHead className='hidden sm:table-cell'>
                      Payout Method
                    </TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payoutHistory.map((payout) => (
                    <TableRow key={payout.name}>
                      <TableCell className='font-medium'>
                        {payout.name}
                      </TableCell>
                      <TableCell>{payout.amount}</TableCell>
                      <TableCell className='hidden md:table-cell'>
                        {payout.paidOn}
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        {payout.method}
                      </TableCell>
                      <TableCell className='text-right'>
                        <Badge variant='secondary'>Paid</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
