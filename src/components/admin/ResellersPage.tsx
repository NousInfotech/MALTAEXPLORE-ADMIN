import { MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ResellerDialog } from "@/components/admin/ResellerDialog"; // Import the client component

// mock data
const resellers = [
    { name: 'ABC Hotel', company: 'ABC Group', status: 'Active', commission: 15, sales: '€8,230' },
    { name: 'Gozo Tours Ltd.', company: 'Gozo Tours Ltd.', status: 'Active', commission: 20, sales: '€7,105' },
    { name: 'Inactive Agency', company: '', status: 'Inactive', commission: 15, sales: '€550' },
    { name: 'SunBreeze Agency', company: 'SunBreeze Co.', status: 'Active', commission: 15, sales: '€6,550' },
    { name: 'Valletta Concierge', company: 'Valletta Group', status: 'Active', commission: 18, sales: '€5,980' },
];

export default function ResellersPage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      {/* Page Header: Title and Actions. Stacks on mobile, row on desktop. */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <h1 className="text-lg font-semibold md:text-2xl">Resellers</h1>
        <div className="ml-auto flex items-center gap-2">
          {/* Create Reseller Dialog Trigger */}
          <ResellerDialog>
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Create Reseller
              </span>
            </Button>
          </ResellerDialog>
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
                {/* Columns hidden on mobile for a cleaner look */}
                <TableHead className="hidden md:table-cell">Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:table-cell">Commission</TableHead>
                <TableHead className="text-right">Sales</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resellers.map((reseller) => (
                <TableRow key={reseller.name}>
                  <TableCell className="font-medium">{reseller.name}</TableCell>
                  <TableCell className="hidden md:table-cell">{reseller.company || '-'}</TableCell>
                  <TableCell>
                    <Badge variant={reseller.status === 'Active' ? 'default' : 'outline'}>
                      {reseller.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{reseller.commission}%</TableCell>
                  <TableCell className="text-right">{reseller.sales}</TableCell>
                  <TableCell>
                    {/* Dropdown menu for actions is ideal for mobile */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuSeparator />
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
            Showing <strong>1-5</strong> of <strong>87</strong> resellers
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}