import { Check, Plane, Map, Gem } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

const packages = [
  {
    title: "Paquete Básico – Asesoría Express",
    icon: Map,
    description: "Para personas que ya tienen un destino en mente pero necesitan ayuda con detalles.",
    pdfFeatures: [
      "Recomendación de vuelos, hospedajes, actividades y atracciones.",
      "Consejos y curiosidades del destino.",
      "Presupuesto general estimado.",
    ],
    extraFeatures: [
      "2 consultas por email o WhatsApp"
    ],
    priceListedDestination: "10€",
    priceNewDestination: "25€",
    estimatedDelivery: "1 día"
  },
  {
    title: "Paquete Intermedio – Itinerario Personalizado",
    icon: Plane,
    description: "Para viajeros que quieren un plan detallado sin tener que investigar.",
    pdfFeatures: [
      "Todo lo del Paquete Básico.",
      "Itinerario completo día por día con horarios, rutas y restaurentes sugeridos.",
      "Mapas con las ubicaciones de los lugares a visitar y las rutas.",
      "Presupuesto detallado con varias opciones de precio.",
    ],
    extraFeatures: [
      "Atención de dudas hasta el inicio de viaje por email o WhatsApp.",
    ],
    priceListedDestination: "50€",
    priceNewDestination: "75€",
    estimatedDelivery: "3-4 dias"
  },
  {
    title: "Paquete Premium – Viaje 100% Personalizado + Gestión",
    icon: Gem,
    description: "Para personas que quieren una experiencia sin preocupaciones con todo organizado.",
    pdfFeatures: [
      "Todo lo del Paquete Intermedio.",
      "Videollamada de 25min para hablar de preferencias y ajustes.",
      "Revisión del itinerario y ajustes según feedback.",
    ],
    extraFeatures: [
      "Soporte por WhatsApp durante el viaje (respuesta en menos de 24h).",
      "Acompañar al cliente en la reserva de vuelos, hoteles y actividades.",
    ],
    priceListedDestination: "150€",
    priceNewDestination: "200€",
    estimatedDelivery: "Según disponibilidad"
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
                      Ver destinos seleccionados
                    </Link>
                  </p>
                  <p className="mt-4 font-semibold">
                    Tiempo estimado de entrega: <span className="font-normal">{pkg.estimatedDelivery}</span>
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

