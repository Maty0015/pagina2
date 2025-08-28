import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductGrid } from "./product-grid";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Nuestros Productos
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explora nuestra colección de cartas, accesorios y más.
        </p>
      </div>
      <ProductGrid allProducts={products} allCategories={categories} />
    </div>
  );
}
