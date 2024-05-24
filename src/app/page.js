import CategoryBanner from '@/components/categoryBanner';
import Hero from '@/components/hero';
import Newsletter from '@/components/newsletter';
import TopReviewed from '@/components/topReviewed';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <CategoryBanner />
      <TopReviewed />
      <Newsletter />
    </div>
  );
}
