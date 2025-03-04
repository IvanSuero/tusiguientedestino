import Link from 'next/link'
import { PlaneIcon } from 'lucide-react'
// import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className='bg-white shadow-sm border-b-gray-600 border-b'>
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/' className='sm:text-2xl flex gap-2 text-xl font-bold text-primary'>
          <PlaneIcon size={32} />
          Tu Siguiente Destino
        </Link>
        <div className='space-x-6 flex justify-center items-center'>
          <Link href='/destinations' className='text-gray-600 hover:text-primary hidden sm:block'>
            Destinos
          </Link>
          {/* <Link href='/free-budget' className='text-gray-600 hover:text-primary hidden sm:block'>
            Presupuesto gratuito
          </Link>
          <Link href='/plan-trip'>
            <Button>Planifica tu viaje</Button>
          </Link> */}
        </div>
      </nav>
    </header>
  )
}