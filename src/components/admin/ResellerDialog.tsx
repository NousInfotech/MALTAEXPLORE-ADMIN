"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the shape of a tour object
interface Tour {
  id: number;
  name: string;
}

// mock data
const allTours: Tour[] = [
  { id: 1, name: 'Gozo Jeep Safari' },
  { id: 2, name: 'Comino Blue Lagoon Cruise' },
  { id: 3, name: 'Valletta Walking Tour' },
  { id: 4, name: 'Harbour Cruise by Night' },
  { id: 5, name: 'Mdina & Rabat Historical Tour' },
  { id: 6, name: 'Three Cities Boat Trip' },
  { id: 7, name: 'Malta Quad Bike Adventure' },
];

export function ResellerDialog({ children }: { children: React.ReactNode }) {
  // State to manage which tours are selected for a reseller
  const [selectedTours, setSelectedTours] = useState<Set<number>>(
    new Set([1, 2, 4]) // Pre-select some for demo purposes
  );

  const handleTourSelection = (tourId: number) => {
    setSelectedTours(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tourId)) {
        newSet.delete(tourId);
      } else {
        newSet.add(tourId);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    setSelectedTours(new Set(allTours.map(tour => tour.id)));
  };

  const handleDeselectAll = () => {
    setSelectedTours(new Set());
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] grid-rows-[auto_1fr_auto] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Create New Reseller</DialogTitle>
          <DialogDescription>
            Manage reseller details and tour access below.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="basic-info" className="w-full">
          <TabsList className="grid grid-cols-2 mx-6 -mb-px w-auto h-auto bg-transparent p-0">
            <TabsTrigger value="basic-info" className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-t-md">Basic Info</TabsTrigger>
            <TabsTrigger value="tour-access" className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-t-md">Tour Access Control</TabsTrigger>
          </TabsList>
          
          <div className="p-6">
            <TabsContent value="basic-info" className="mt-0">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Reseller Name</Label>
                  <Input id="name" placeholder="e.g., Grand Hotel Excelsior" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Contact Email</Label>
                    <Input id="email" type="email" placeholder="contact@excelsior.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="commission">Commission Rate (%)</Label>
                    <Input id="commission" type="number" defaultValue="15" />
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label>Status</Label>
                        <p className="text-sm text-muted-foreground">
                            Active resellers can log in and make bookings.
                        </p>
                    </div>
                    <Switch defaultChecked={true} aria-readonly />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tour-access" className="mt-0">
              <div className="space-y-4">
                 <p className="text-sm text-muted-foreground">
                    Activate or deactivate specific tours for this reseller.
                 </p>
                 <div className="flex items-center gap-2">
                    <Button variant="secondary" size="sm" onClick={handleSelectAll}>Select All</Button>
                    <Button variant="secondary" size="sm" onClick={handleDeselectAll}>Deselect All</Button>
                 </div>
                 <ScrollArea className="h-64 w-full rounded-md border p-4">
                    <div className="space-y-2">
                        {allTours.map((tour) => (
                          <div key={tour.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`tour-${tour.id}`}
                              checked={selectedTours.has(tour.id)}
                              onCheckedChange={() => handleTourSelection(tour.id)}
                            />
                            <Label htmlFor={`tour-${tour.id}`} className="font-normal cursor-pointer">
                              {tour.name}
                            </Label>
                          </div>
                        ))}
                    </div>
                 </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <DialogFooter className="p-6 pt-0">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save Reseller</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}