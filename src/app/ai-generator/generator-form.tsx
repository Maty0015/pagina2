"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleGenerateDescription } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Loader2 } from "lucide-react";

const initialState = {
  message: "",
  errors: null,
  generatedDescription: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generando...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generar Descripción
        </>
      )}
    </Button>
  );
}


export function GeneratorForm() {
  const [state, formAction] = useFormState(handleGenerateDescription, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.errors) {
      toast({
        variant: "destructive",
        title: "Error de Validación",
        description: state.message,
      });
    } else if (state.message && state.generatedDescription) {
       toast({
        title: "¡Éxito!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message) {
         toast({
            variant: "destructive",
            title: "Error del Servidor",
            description: state.message,
        });
    }
  }, [state, toast]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <form ref={formRef} action={formAction}>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              1. Introduce los Detalles
            </CardTitle>
            <CardDescription>
              Proporciona la información básica de tu producto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="productName">Nombre del Producto</Label>
              <Input
                id="productName"
                name="productName"
                placeholder="Ej: Dragón Blanco de Ojos Azules"
              />
              {state.errors?.productName && <p className="text-sm text-destructive">{state.errors.productName[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="productDescription">Descripción Actual</Label>
              <Textarea
                id="productDescription"
                name="productDescription"
                placeholder="Ej: Una carta legendaria con un poder de ataque inmenso."
                rows={4}
              />
               {state.errors?.productDescription && <p className="text-sm text-destructive">{state.errors.productDescription[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="aiHint">Pista para la IA (Palabras Clave)</Label>
              <Input
                id="aiHint"
                name="aiHint"
                placeholder="Ej: legendario, poderoso, icónico, nostálgico"
              />
               {state.errors?.aiHint && <p className="text-sm text-destructive">{state.errors.aiHint[0]}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            2. Resultado Generado
          </CardTitle>
          <CardDescription>
            Aquí aparecerá la descripción generada por la IA.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
            <div className="bg-muted h-full w-full rounded-md p-4 min-h-[200px]">
                {state.generatedDescription ? (
                    <p className="text-foreground whitespace-pre-wrap">{state.generatedDescription}</p>
                ) : (
                    <p className="text-muted-foreground italic">Esperando generación...</p>
                )}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
