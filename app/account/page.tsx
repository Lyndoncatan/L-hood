"use client"

import Link from "next/link"
import { useState } from "react"
import { Package, User, CreditCard, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Mock user data - in a real app, this would come from your authentication system
const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    country: "USA",
  },
}

export default function AccountPage() {
  const [user, setUser] = useState(mockUser)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(user)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(formData)
    setIsEditing(false)
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="sticky top-20 space-y-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <nav className="space-y-2">
              <Link
                href="/account"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all"
              >
                <User className="h-4 w-4" />
                Account
              </Link>
              <Link
                href="/account/orders"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Orders
              </Link>
              <Link
                href="/account/payment"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <CreditCard className="h-4 w-4" />
                Payment Methods
              </Link>
              <Link
                href="/api/auth/signout"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          <Tabs defaultValue="profile">
            <TabsList className="mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-6">
              <div className="rounded-lg border p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </div>
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p>{user.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p>{user.email}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="address" className="space-y-6">
              <div className="rounded-lg border p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Shipping Address</h2>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </div>
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address.street">Street Address</Label>
                      <Input
                        id="address.street"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address.city">City</Label>
                        <Input
                          id="address.city"
                          name="address.city"
                          value={formData.address.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address.state">State/Province</Label>
                        <Input
                          id="address.state"
                          name="address.state"
                          value={formData.address.state}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address.zipCode">Zip/Postal Code</Label>
                        <Input
                          id="address.zipCode"
                          name="address.zipCode"
                          value={formData.address.zipCode}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address.country">Country</Label>
                        <Input
                          id="address.country"
                          name="address.country"
                          value={formData.address.country}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <p>{user.address.street}</p>
                    <p>
                      {user.address.city}, {user.address.state} {user.address.zipCode}
                    </p>
                    <p>{user.address.country}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="security" className="space-y-6">
              <div className="rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <div className="flex justify-end">
                    <Button>Update Password</Button>
                  </div>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

