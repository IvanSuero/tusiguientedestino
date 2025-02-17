import Image from 'next/image'
import destinations from '../../data/destinations.json'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function MainDestinations() {
  const mainDestinations = destinations.main
  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4 flex-col justify-center items-center space-y-8'>
        <h2 className='text-3xl font-bold text-center mb-12'>Destinos populares</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {mainDestinations.map((destination) => (
            <div key={destination.name} className='bg-white rounded-lg shadow-md overflow-hidden'>
              <Image
                src={destination.image}
                alt={destination.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold'>{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <Link href="/free-budget">
            <Button size="lg" className='bg-primary text-white hover:bg-primary/90 uppercase'>Solicita un presupuesto gratuito</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}