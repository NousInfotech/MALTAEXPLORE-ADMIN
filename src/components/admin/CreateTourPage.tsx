import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function CreateTourPage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-7xl flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7" asChild>
            <Link href="/dashboard/tours">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Create New Tour
          </h1>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">Preview</Button>
            <Button size="sm">Save Tour</Button>
          </div>
        </div>
        {/* Responsive two-column layout */}
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          {/* Left Column */}
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tour Details</CardTitle>
                <CardDescription>
                  Core information about the tour.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="title">Tour Title</Label>
                  <Input id="title" type="text" className="w-full" defaultValue="Gozo Jeep Safari" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Tour Description</Label>
                  <Textarea id="description" defaultValue="An exciting full-day jeep safari..." className="min-h-32" />
                  <p className="text-xs text-muted-foreground">
                    A rich text editor would be ideal here for bolding, lists, etc.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Commission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <Label htmlFor="price">Price per person (€)</Label>
                    <Input id="price" type="number" defaultValue="95.00" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="commission">Default Commission (%)</Label>
                    <Input id="commission" type="number" defaultValue="15" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tour Media</CardTitle>
                <CardDescription>Upload high-quality images or a video for the tour.</CardDescription>
              </CardHeader>
              <CardContent>
                 {/* This is a placeholder for a real file upload component */}
                 <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <p className="mb-2 text-sm text-muted-foreground">Drag & drop or click to upload</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div> 
              </CardContent>
            </Card>
          </div>
          {/* Right Column */}
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Global Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="flex items-center space-x-2">
                    <Switch id="status" defaultChecked={true} aria-label="Tour status" />
                    <Label htmlFor="status">Active</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Category & Details</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="full-day">
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-day">Full Day</SelectItem>
                      <SelectItem value="half-day">Half Day</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                      <SelectItem value="cultural">Cultural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="duration">Duration (e.g., 8 hours)</Label>
                  <Input id="duration" type="text" defaultValue="8 hours" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" type="text" defaultValue="Gozo, Malta" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Save/Preview buttons shown on mobile */}
        <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">Preview</Button>
            <Button size="sm">Save Tour</Button>
        </div>
      </div>
    </main>
  )
}