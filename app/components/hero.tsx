import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className='relative h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 z-0 justify-center items-center flex' style={{
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <div className='relative z-10 text-center items-center justify-center text-white px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 shadow-text'>Destinos de ensueño solo para ti</h1>
          <p className='text-xl sm:text-2xl mb-8 max-w-3xl mx-auto shadow-text'>Déjanos planificar tu viaje perfecto, a medida.</p>
          <Link href="#travelPackages">
            <Button size="lg" className='bg-primary text-white hover:bg-primary/90'>Descubre nuestros paquetes</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}