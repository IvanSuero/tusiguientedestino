import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import destinations from '../../data/destinations.json'

export default function Destinations() {
  const allDestinations = destinations.all
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestros Destinos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {allDestinations.map((destination) => (
          <Card key={destination.name}>
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{destination.name}</CardTitle>
              <CardDescription>{destination.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

