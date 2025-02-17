import { Check, Plane, Map, Gem } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

const packages = [
  {
    title: "Paquete Básico – Asesoría Express",
    icon: Map,
    description: "Para personas que ya tienen un destino en mente pero necesitan ayuda con detalles.",
    pdfFeatures: [
      "Recomendación de vuelos y hospedajes según presupuesto.",
      "Lista de actividades y atracciones principales.",
      "Consejos sobre transporte local y clima.",
      "Recomendación de seguros de viaje y tarjetas SIM."
    ],
    extraFeatures: [
      "2 consultas por email o WhatsApp"
    ],
    priceListedDestination: "20€",
    priceNewDestination: "35€",
  },
  {
    title: "Paquete Intermedio – Itinerario Personalizado",
    icon: Plane,
    description: "Para viajeros que quieren un plan detallado sin tener que investigar.",
    pdfFeatures: [
      "Todo lo del Paquete Básico.",
      "Itinerario completo día por día con horarios y rutas sugeridas.",
      "Recomendaciones de restaurantes según preferencias alimenticias.",
      "Actividades recomendadas según tipo de viajero (aventura, cultural, relax).",
      "Mapas y enlaces a reservas de transporte y tours.",
    ],
    extraFeatures: [
      "Atender dudas hasta inicio de viaje por email o WhatsApp.",
    ],
    priceListedDestination: "60€",
    priceNewDestination: "100€",
  },
  {
    title: "Paquete Premium – Viaje 100% Personalizado + Gestión",
    icon: Gem,
    description: "Para personas que quieren una experiencia sin preocupaciones y que les organices todo.",
    pdfFeatures: [
      "Todo lo del Paquete Intermedio.",
      "Videollamada de 25min para hablar de preferencias y ajustes.",
      "Revisión del itinerario y ajustes según feedback.",
    ],
    extraFeatures: [
      "Soporte por WhatsApp durante el viaje (respuesta en menos de 12h).",
      "Acompañar al cliente en la reserva de vuelos, hoteles y actividades.",
    ],
    priceListedDestination: "150€",
    priceNewDestination: "200€",
  },
]

export default function TravelPackages() {
  return (
    <section className="py-12 bg-gray-50" id="travelPackages">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Paquetes de Viaje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <pkg.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle>{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-semibold mb-2">Recibirás un PDF con:</p>
                <ul className="space-y-2">
                  {pkg.pdfFeatures.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-semibold mb-2 mt-4">Y además:</p>
                <ul className="space-y-2">
                  {pkg.extraFeatures.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-semibold mb-2">Precio:</p>
                  <p>Destinos seleccionados: {pkg.priceListedDestination}</p>
                  <p>Nuevo destino: {pkg.priceNewDestination}</p>
                  <p className="mt-2 text-sm text-gray-600">
                    <Link href="/destinations" className="text-primary underline">
                      Ver lista de destinos
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center text-gray-600">
          <p>
            El precio es por viaje. Por ejemplo, el paquete intermedio para 10 días y 4 personas podría salir a 1,5€ por persona y día.
          </p>
        </div>
      </div>
    </section>
  )
}

