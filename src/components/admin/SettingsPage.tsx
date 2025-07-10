import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

// Mock data for the Tours table
const tours = [
    { name: 'Gozo Jeep Safari', category: 'Full Day', status: true },
    { name: 'Comino Blue Lagoon Cruise', category: 'Half Day', status: true },
    { name: 'Harbour Cruise by Night', category: 'Evening', status: false },
    { name: 'Valletta Walking Tour', category: 'Cultural', status: true },
];

export default function SettingsPage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your global platform settings and configurations.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
        <Tabs defaultValue="payouts">
          {/* The TabsList is responsive by default and will wrap if needed on mobile */}
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="payouts">Payouts</TabsTrigger>
            <TabsTrigger value="tours">Tours</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          {/* Payouts Tab */}
          <TabsContent value="payouts">
            <Card>
              <CardHeader>
                <CardTitle>Payout Settings</CardTitle>
                <CardDescription>
                  Configure rules for reseller payouts across the platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="payout-threshold">Minimum Payout Threshold</Label>
                    <p className="text-xs text-muted-foreground -mt-1 mb-1">
                      Set the minimum commission balance a reseller must have to request a payout.
                    </p>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">€</span>
                      <Input id="payout-threshold" type="number" defaultValue="100.00" className="pl-7" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Tours Tab */}
          <TabsContent value="tours">
            <Card>
              <CardHeader>
                <CardTitle>Global Tour Management</CardTitle>
                <CardDescription>
                  Globally activate or deactivate tours for all resellers. This is useful for seasonal tours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tour Name</TableHead>
                      <TableHead className="hidden md:table-cell">Category</TableHead>
                      <TableHead className="text-right">Global Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tours.map((tour) => (
                      <TableRow key={tour.name}>
                        <TableCell className="font-medium">{tour.name}</TableCell>
                        <TableCell className="hidden md:table-cell">{tour.category}</TableCell>
                        <TableCell className="text-right">
                          <Switch defaultChecked={tour.status} aria-label={`${tour.name} status`} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save Tour Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Send Global Notification</CardTitle>
                <CardDescription>
                  Compose and send a notification to all active resellers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                   <div className="grid gap-2">
                     <Label htmlFor="notification-subject">Subject</Label>
                     <Input id="notification-subject" placeholder="e.g., New Tour Launch!" />
                   </div>
                   <div className="grid gap-2">
                     <Label htmlFor="notification-message">Message</Label>
                     <Textarea
                        id="notification-message"
                        placeholder="Type your notification message here."
                        className="min-h-32"
                      />
                   </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Send to All Resellers</Button>
              </CardFooter>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </main>
  );
}