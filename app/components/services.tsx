import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin, Calendar, CreditCard, Compass } from "lucide-react"

const services = [
  {
    title: "Selección de destinos",
    description: "Ayudamos a elegir los destinos más adecuados para tu viaje.",
    icon: MapPin,
  },
  {
    title: "Planificación de itinerarios",
    description: "Creamos itinerarios diarios personalizados para tu viaje.",
    icon: Calendar,
  },
  {
    title: "Gestión de presupuesto",
    description: "Trabajamos con tu presupuesto para maximizar la experiencia.",
    icon: CreditCard,
  },
  {
    title: "Experiencia y soporte",
    description: "Consejos y soporte durante tu viaje para una experiencia inolvidable.",
    icon: Compass,
  },
]

export default function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

