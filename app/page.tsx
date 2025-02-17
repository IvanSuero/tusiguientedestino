import Hero from './components/hero'
import MainDestinations from './components/main-destinations'
import Services from './components/services'
import TravelPackages from './components/travel-packages';

export default function Home() {
  return (
    <div>
      <Hero />
      <MainDestinations />
      <TravelPackages />
      <Services />
    </div>
  );
}
