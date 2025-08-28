"use server";

import { z } from "zod";
import { generateProductDescription } from "@/ai/flows/generate-product-description";

const formSchema = z.object({
  productName: z.string().min(3, "El nombre del producto debe tener al menos 3 caracteres."),
  productDescription: z.string().min(10, "La descripción debe tener al menos 10 caracteres."),
  aiHint: z.string().min(3, "La pista para la IA debe tener al menos 3 caracteres."),
});

export async function handleGenerateDescription(prevState: any, formData: FormData) {
  try {
    const validatedFields = formSchema.safeParse({
      productName: formData.get("productName"),
      productDescription: formData.get("productDescription"),
      aiHint: formData.get("aiHint"),
    });

    if (!validatedFields.success) {
      return {
        message: "Error de validación.",
        errors: validatedFields.error.flatten().fieldErrors,
        generatedDescription: null,
      };
    }
    
    const result = await generateProductDescription(validatedFields.data);

    return {
      message: "Descripción generada exitosamente.",
      errors: null,
      generatedDescription: result.generatedDescription,
    };
  } catch (error) {
    console.error("Error generating description:", error);
    return {
        message: "Ocurrió un error al generar la descripción.",
        errors: null,
        generatedDescription: null,
    };
  }
}
