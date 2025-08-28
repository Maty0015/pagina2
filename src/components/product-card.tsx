import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/products/${product.slug}`} className="block">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={800}
            data-ai-hint={product.imageHint}
            className="w-full h-64 object-cover"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Badge variant="secondary" className="mb-2">{product.edition}</Badge>
        <CardTitle className="text-lg font-headline mb-2">
            <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                {product.name}
            </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Añadir al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
