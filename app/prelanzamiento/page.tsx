'use client'

import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import destinations from '../../data/destinations.json';
import emailjs from '@emailjs/browser';

const destinationOptions = destinations.all;
const packages = ["Básico (20% descuento)", "Intermedio (50% descuento)", "Premium (30% descuento)"];

export default function PrelaunchForm() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    package: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY
      const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    try {
      const params = {
        name: formData.name,
        email: formData.email,
        destination: formData.destination,
        package: formData.package,
      }
      const res = await emailjs.send(`${serviceId}`, `${templateId}`, params, userId)
    } catch (error) {
      console.error('Error sending email:', error)
    }
  };

  return (
    <Card className="max-w-md mx-auto p-6 mt-10">
      <CardContent>
        <h2 className="text-2xl font-bold mb-2">Únete al prelanzamiento</h2>
        <p className="text-md text-gray-500 mb-4">¡Sin compromiso y totalmente gratis!</p>
        <p className="text-md text-gray-500 mb-4">Con el lanzamiento oficial te enviaremos un correo con el código de descuento.</p>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              value={formData.name}
              name="name"
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div>
            <Label>Destino</Label>
            <Select onValueChange={(value) => handleChange("destination", value)} name="destination">
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un destino" />
              </SelectTrigger>
              <SelectContent>
                {destinationOptions.map((dest) => (
                  <SelectItem key={dest.name} value={dest.name}>{dest.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Paquete</Label>
            <Select onValueChange={(value) => handleChange("package", value)} name="package">
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un paquete" />
              </SelectTrigger>
              <SelectContent>
                {packages.map((pkg) => (
                  <SelectItem key={pkg} value={pkg}>{pkg}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Registrarse</Button>
        </form>
      </CardContent>
    </Card>
  );
}
