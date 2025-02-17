"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import destinations from '../../data/destinations.json'

export default function FreeBudget() {
  const [submitted, setSubmitted] = useState(false)
  const options = destinations.all

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the form data to your server
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 pt-12 pb-0 space-y-16">
      <h1 className="text-4xl font-bold text-center">Pide un presupuesto gratuito</h1>
      <div className="flex justify-center items-center">
        <div className="w-1/3">
          <h2 className="text-2xl font-bold text-center mb-8">¡Sin compromiso!</h2>
          <div>
            <ul className="list-disc space-y-6">
              <li className="mb-4 flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Incluye transporte, alojamiento, actividades, comidas, seguro de viaje e internet.</p>
              </li>
              <li className="mb-4 flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p>Totalmente gratuito y sin ningún compromiso.</p>
              </li>
              <li className="mb-4 flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p>Recibirás un PDF con toda la información detallada.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/3">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">¡Gracias por tu petición!</h2>
              <p>Nos pondremos en contacto contigo proximamente.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
              <Input type="text" placeholder="Nombre" required />
              <Input type="email" placeholder="Email" required />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Destino" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.name} value={option.name}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input type="number" placeholder="Número de viajeros" required min="1" />
              <Input type="number" placeholder="Número de dias" required min="1" />
              <Textarea placeholder="Aquí puedes especificar fechas, pedir destinos, visitas o excursiones específicas o hacer cualquier sugerencia/petición (opcional)." />
              <Button type="submit" className="w-full">
                Solicitar presupuesto
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

