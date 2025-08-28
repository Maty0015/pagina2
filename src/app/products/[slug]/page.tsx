import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="rounded-lg overflow-hidden border">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={800}
            data-ai-hint={product.imageHint}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-headline text-4xl font-bold mb-4">{product.name}</h1>
          <div className="flex gap-2 mb-4">
              <Badge variant="secondary">{product.edition}</Badge>
              <Badge variant="outline">{product.format}</Badge>
          </div>
          <p className="text-muted-foreground text-lg mb-6">{product.description}</p>
          <div className="flex items-center justify-between bg-muted/50 p-6 rounded-lg">
            <p className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Añadir al Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
