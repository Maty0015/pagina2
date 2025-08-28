import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { news } from "@/data/news";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/product-card";
import { NewsCard } from "@/components/news-card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const latestNews = news.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-16 md:py-24">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">
          Bienvenido a Tienda Estática TCG
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Tu destino número uno para cartas coleccionables, accesorios y las
          últimas noticias del mundo TCG.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/products">Explorar Productos</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/news">Últimas Noticias</Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline text-3xl font-bold">Productos Destacados</h2>
            <Button variant="link" asChild>
                <Link href="/products">Ver todos <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted -mx-4 px-4 md:rounded-lg">
        <div className="container mx-auto">
            <h2 className="font-headline text-3xl font-bold text-center mb-8">Categorías Populares</h2>
            <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
                <Button key={category.id} variant="secondary" size="lg" asChild>
                <Link href={`/products?category=${category.slug}`}>
                    {category.name}
                </Link>
                </Button>
            ))}
            </div>
        </div>
      </section>

      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline text-3xl font-bold">Últimas Noticias</h2>
            <Button variant="link" asChild>
                <Link href="/news">Leer más <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
