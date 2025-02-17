"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function PlanTrip() {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically process the payment and send the form data to your server
    setStep(4) // Move to confirmation step
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Planifica tu viaje</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Paso {step} de 4</CardTitle>
          <CardDescription>
            {step === 1 && "Háblanos de tu viaje soñado y nosotros lo haremos realidad."}
            {step === 2 && "Datos personales"}
            {step === 3 && "Revisar y pagar"}
            {step === 4 && "Confirmación"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Destino" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paris">Paris</SelectItem>
                  <SelectItem value="tokyo">Tokyo</SelectItem>
                  <SelectItem value="newyork">New York</SelectItem>
                  <SelectItem value="bali">Bali</SelectItem>
                </SelectContent>
              </Select>
              <Input type="number" placeholder="Número de viajeros" required min="1" />
              <Input type="number" placeholder="Número de dias" required min="1" />
              <Textarea placeholder="Preferencias o solicitudes especiales" />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <Input type="text" placeholder="Nombre completo" required />
              <Input type="email" placeholder="Email" required />
              <Input type="tel" placeholder="Teléfono" required />
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <p>Por favor revisa los datos proporcionados y realiza el pago.</p>
              <Input type="text" placeholder="Tarjeta" required />
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" placeholder="Fecha expiración" required />
                <Input type="text" placeholder="CVV" required />
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">¡Gracias por su petición!</h2>
              <p>
                Estamos emocionados de planificar tu viaje soñado. Recibirás un correo de confirmación con más detalles.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {step < 3 && (
            <Button onClick={handleNextStep} className="w-full">
              Siguiente paso
            </Button>
          )}
          {step === 3 && (
            <Button onClick={handleSubmit} className="w-full">
              Pagar y finalizar
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

