// import Link from 'next/link'
// import { Mail } from 'lucide-react'

export default function Footer() {
  // const links = [
  //   { title: 'Inicio', url: '/' },
  //   { title: 'Destinos', url: '/' },
  //   { title: 'Presupuesto gratuito', url: '/' },
  //   { title: 'Planifica tu viaje', url: '/' },
  // ]
  return (
    <footer className='bg-gray100 text-gray-600'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-bold mb-2 uppercase'>Tu Siguiente Destino</h3>
            <p>Planificadores de viajes y experiencias únicas e inolvidables.</p>
          </div>
          {/* <div>
            <h3 className='text-lg font-semibold mb-2'>Enlaces de interés</h3>
            <ul className='space-y-1'>
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className='hover:text-primary hover:underline'>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Contacto</h3>
            <div className='flex space-x-2'>
              <Mail className="w-6 h-6 text-primary mb-4" />
              <p>info@tusiguientedestino.com</p>
            </div>
          </div> */}
        </div>
        <div className='mt-6 text-center'>
          <p>&copy; 2025 Tu Siguiente Destino. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}