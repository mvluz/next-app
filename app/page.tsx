import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
   <main>
    <h1>Hellou World</h1>
    <Link href="/users">Users</Link>
    <ProductCard/>
   </main>
  )
}
