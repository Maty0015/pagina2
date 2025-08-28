import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Contáctanos
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          ¿Tienes alguna pregunta o comentario? Nos encantaría saber de ti.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Enviar un Mensaje</CardTitle>
                <CardDescription>Completa el formulario y nos pondremos en contacto contigo lo antes posible.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Tu nombre completo" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input id="subject" placeholder="Asunto de tu mensaje" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Enviar Mensaje</Button>
                </form>
            </CardContent>
        </Card>
        
        <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold">Información de Contacto</h2>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Correo Electrónico</h3>
                        <p className="text-muted-foreground">Soporte para preguntas generales.</p>
                        <a href="mailto:soporte@tiendaestaticatcg.com" className="text-primary hover:underline">soporte@tiendaestaticatcg.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Teléfono</h3>
                        <p className="text-muted-foreground">Lunes a Viernes, 9am - 5pm.</p>
                        <a href="tel:+123456789" className="text-primary hover:underline">+1 (234) 567-89</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Oficina Central</h3>
                        <p className="text-muted-foreground">Calle Falsa 123, Springfield</p>
                        <p className="text-primary">Visitas solo con cita previa</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
