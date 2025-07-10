import { MoreHorizontal, PlusCircle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

// mock data
const resellers = [
  {
    name: 'ABC Hotel',
    company: 'ABC Group',
    status: 'Active',
    commission: 15,
    sales: '€8,230',
    joined: '2023-10-01'
  },
  {
    name: 'Gozo Tours Ltd.',
    company: 'Gozo Tours Ltd.',
    status: 'Active',
    commission: 20,
    sales: '€7,105',
    joined: '2023-05-15'
  },
  {
    name: 'Inactive Agency',
    company: '',
    status: 'Inactive',
    commission: 15,
    sales: '€550',
    joined: '2023-02-20'
  },
  {
    name: 'SunBreeze Agency',
    company: 'SunBreeze Co.',
    status: 'Active',
    commission: 15,
    sales: '€6,550',
    joined: '2022-12-10'
  }
];

export default function ResellersPage() {
  return (
    <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <div className='flex items-center'>
        <h1 className='text-lg font-semibold md:text-2xl'>Resellers</h1>
        <div className='ml-auto flex items-center gap-2'>
          {/* Create Reseller Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button size='sm' className='h-8 gap-1'>
                <PlusCircle className='h-3.5 w-3.5' />
                <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                  Create Reseller
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Create New Reseller</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new reseller. Click save
                  when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    placeholder='ABC Hotel'
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='email' className='text-right'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='contact@abchotel.com'
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='commission' className='text-right'>
                    Commission (%)
                  </Label>
                  <Input
                    id='commission'
                    type='number'
                    defaultValue='15'
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='status' className='text-right'>
                    Status
                  </Label>
                  <Switch id='status' defaultChecked={true} />
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Save Reseller</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Reseller List</CardTitle>
          <CardDescription>
            Manage your resellers and view their performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reseller Name</TableHead>
                <TableHead className='hidden md:table-cell'>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='hidden md:table-cell'>
                  Commission
                </TableHead>
                <TableHead className='text-right'>Total Sales</TableHead>
                <TableHead>
                  <span className='sr-only'>Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resellers.map((reseller) => (
                <TableRow key={reseller.name}>
                  <TableCell className='font-medium'>{reseller.name}</TableCell>
                  <TableCell className='hidden md:table-cell'>
                    {reseller.company || '-'}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        reseller.status === 'Active' ? 'default' : 'outline'
                      }
                    >
                      {reseller.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='hidden md:table-cell'>
                    {reseller.commission}%
                  </TableCell>
                  <TableCell className='text-right'>{reseller.sales}</TableCell>
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
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='text-red-600'>
                          Deactivate
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
            Showing <strong>1-4</strong> of <strong>87</strong> resellers
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
