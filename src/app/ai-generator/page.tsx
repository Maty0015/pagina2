
'use client';

import {useEffect} from 'react';
import {GeneratorForm} from './generator-form';

export default function AIGeneratorPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      alert(
        'La página del generador de IA no funcionará en un sitio estático. Considere alojar en un entorno compatible con Node.js como Vercel o Firebase App Hosting para una funcionalidad completa.'
      );
    }
  }, []);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Generador de Descripciones con IA
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Crea descripciones de productos atractivas y optimizadas en segundos.
          Simplemente introduce los detalles de tu producto y deja que nuestra
          IA haga la magia.
        </p>
      </div>

      <GeneratorForm />
    </div>
  );
}
