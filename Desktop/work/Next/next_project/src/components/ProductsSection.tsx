"use client";

import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Product } from "@/types/interfaces";


const ProductsSection = () => {
const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=8');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

const ProductCard = ({ product }: { product: Product }) => (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300 p-4"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="rounded-full h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        {product.rating.rate >= 4 && (
          <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
            Best Seller
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating.rate)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({product.rating.count})</span>
        </div>
        
        <CardTitle className="line-clamp-2 text-base">
          {product.title}
        </CardTitle>
        
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardFooter className="flex items-center justify-between pt-0">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">
            ${product.price}
          </span>
          <Badge variant="outline" className="w-fit capitalize">
            {product.category}
          </Badge>
        </div>
        
        <Button className="gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );

  if (loading) {
    return (
      <section className="py-20 px-4 md:px-6 lg:px-8 xl:px-12 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Featured Products
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardHeader>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 md:px-6 lg:px-8 xl:px-12 bg-slate-900">
        <div className="container mx-auto">
          <Alert variant="destructive" className="max-w-md mx-auto">
            <AlertDescription className="text-center">
              {error}
            </AlertDescription>
            <div className="mt-4 text-center">
              <Button 
                onClick={() => window.location.reload()} 
                variant="outline"
              >
                Try Again
              </Button>
            </div>
          </Alert>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 xl:px-12 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured Products
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover our handpicked selection of premium products, carefully chosen 
            to meet your needs and exceed your expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="px-8">
            {/* View All Products */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;