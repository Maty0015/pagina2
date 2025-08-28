"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type { Product, Category } from "@/lib/types";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ListFilter, Search } from "lucide-react";

interface ProductGridProps {
  allProducts: Product[];
  allCategories: Category[];
}

export function ProductGrid({ allProducts, allCategories }: ProductGridProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name-asc");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredAndSortedProducts = useMemo(() => {
    let products = allProducts;

    if (searchTerm) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      products = products.filter((p) => p.category === selectedCategory);
    }
    
    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortOrder) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return products;
  }, [allProducts, searchTerm, sortOrder, priceRange, selectedCategory]);
  
  const resetFilters = () => {
    setSearchTerm("");
    setSortOrder("name-asc");
    setPriceRange([0, 100]);
    setSelectedCategory("all");
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 p-6 bg-card rounded-lg border">
        <div className="md:col-span-4 lg:col-span-1">
          <label className="text-sm font-medium text-muted-foreground flex items-center mb-2"><Search className="h-4 w-4 mr-2"/>Buscar</label>
          <Input
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="md:col-span-2 lg:col-span-1">
          <label className="text-sm font-medium text-muted-foreground mb-2">Ordenar por</label>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger>
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Nombre (A-Z)</SelectItem>
              <SelectItem value="name-desc">Nombre (Z-A)</SelectItem>
              <SelectItem value="price-asc">Precio (Bajo a Alto)</SelectItem>
              <SelectItem value="price-desc">Precio (Alto a Bajo)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="md:col-span-2 lg:col-span-1">
          <label className="text-sm font-medium text-muted-foreground mb-2">Categoría</label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {allCategories.map(cat => (
                <SelectItem key={cat.id} value={cat.slug}>{cat.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-4 lg:col-span-1">
          <label className="text-sm font-medium text-muted-foreground mb-2">
            Rango de Precios: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <Slider
            min={0}
            max={100}
            step={1}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value)}
            className="mt-4"
          />
        </div>
        
        <div className="md:col-span-4 flex justify-end">
            <Button variant="ghost" onClick={resetFilters} className="flex items-center gap-2">
                <ListFilter className="h-4 w-4" />
                Limpiar Filtros
            </Button>
        </div>
      </div>

      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No se encontraron productos que coincidan con tus filtros.</p>
        </div>
      )}
    </div>
  );
}
