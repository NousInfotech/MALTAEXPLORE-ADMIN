import {
  Activity,
  ArrowUpRight,
  BookCopy,
  CreditCard,
  DollarSign,
  Landmark,
  Ticket,
  Users,
  UserPlus
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { SalesChart } from '@/components/admin/SalesChart'; // Import the client component
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
        {/* Top Row: Key Metric Cards */}
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium not-dark:text-green-500'>
                Total Sales (Today)
              </CardTitle>
              <DollarSign className='text-muted-foreground h-4 w-4 not-dark:text-red-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>€1,240.50</div>
              <p className='text-muted-foreground text-xs'>
                +20.1% from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium not-dark:text-green-500'>
                Total Bookings (Today)
              </CardTitle>
              <BookCopy className='text-muted-foreground h-4 w-4 not-dark:text-red-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>+32</div>
              <p className='text-muted-foreground text-xs'>
                +18.1% from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium not-dark:text-green-500'>
                Active Resellers
              </CardTitle>
              <Users className='text-muted-foreground h-4 w-4 not-dark:text-red-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>87</div>
              <p className='text-muted-foreground text-xs'>
                +2 since last month
              </p>
            </CardContent>
          </Card>
          <Card className='border-orange-500/50 dark:border-orange-400/60'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium not-dark:text-red-500'>
                Pending Payouts
              </CardTitle>
              <CreditCard className='text-muted-foreground h-4 w-4 not-dark:text-red-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>€4,560.00</div>
              <p className='text-muted-foreground text-xs'>
                3 new requests today
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Middle Row: Chart and Top Resellers */}
        <div className='grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
          <div className='xl:col-span-2'>
            <SalesChart />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Resellers</CardTitle>
              <CardDescription>This month's sales leaders.</CardDescription>
            </CardHeader>
            <CardContent className='grid gap-6'>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/01.png' alt='Avatar' />
                  <AvatarFallback>AH</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm leading-none font-medium'>ABC Hotel</p>
                  <p className='text-muted-foreground text-sm'>
                    contact@abchotel.com
                  </p>
                </div>
                <div className='ml-auto font-medium'>€8,230.00</div>
              </div>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/02.png' alt='Avatar' />
                  <AvatarFallback>GT</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm leading-none font-medium'>
                    Gozo Tours Ltd.
                  </p>
                  <p className='text-muted-foreground text-sm'>
                    bookings@gozotours.com
                  </p>
                </div>
                <div className='ml-auto font-medium'>€7,105.50</div>
              </div>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/03.png' alt='Avatar' />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm leading-none font-medium'>
                    SunBreeze Agency
                  </p>
                  <p className='text-muted-foreground text-sm'>
                    info@sunbreeze.com
                  </p>
                </div>
                <div className='ml-auto font-medium'>€6,550.00</div>
              </div>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/04.png' alt='Avatar' />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm leading-none font-medium'>
                    Valletta Concierge
                  </p>
                  <p className='text-muted-foreground text-sm'>
                    desk@vallettaconcierge.com
                  </p>
                </div>
                <div className='ml-auto font-medium'>€5,980.25</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row: Recent Activity */}
        <Card className='not-dark:bg-rose-50/40'>
          <CardHeader className='flex flex-row items-center'>
            <div className='grid gap-2'>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                A log of recent reseller and booking activities.
              </CardDescription>
            </div>
            <Button
              variant='outline'
              asChild
              size='sm'
              className='ml-auto gap-1 not-dark:text-red-500'
            >
              
              <Link href='/dashboard/activities'>
                View All
                <ArrowUpRight className='h-4 w-4' />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <div className='flex items-center gap-4'>
              <div className='rounded-md bg-blue-100 p-2 dark:bg-blue-900/50'>
                <UserPlus className='h-5 w-5 text-blue-600 dark:text-blue-400' />
              </div>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>
                  New Reseller "Malta Suites" created.
                </p>
                <p className='text-muted-foreground text-sm'>5 mins ago</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='rounded-md bg-green-100 p-2 dark:bg-green-900/50'>
                <Ticket className='h-5 w-5 text-green-600 dark:text-green-400' />
              </div>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>
                  Booking #12346 (€150) made by "ABC Hotel".
                </p>
                <p className='text-muted-foreground text-sm'>12 mins ago</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='rounded-md bg-orange-100 p-2 dark:bg-orange-900/50'>
                <Landmark className='h-5 w-5 text-orange-600 dark:text-orange-400' />
              </div>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>
                  Payout of €1,200 requested by "Gozo Tours Ltd".
                </p>
                <p className='text-muted-foreground text-sm'>1 hour ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
