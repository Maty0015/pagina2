import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
              Acerca de Nosotros
            </h1>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                <strong>Tienda Estática TCG</strong> nació de una pasión
                compartida por los juegos de cartas coleccionables. Somos un
                grupo de amigos y jugadores veteranos que queríamos crear un
                espacio donde tanto los nuevos jugadores como los coleccionistas
                experimentados pudieran encontrar todo lo que necesitan.
              </p>
              <p>
                Nuestra misión es ofrecer una selección curada de los mejores
                productos, desde las cartas individuales más buscadas hasta los
                accesorios de la más alta calidad para proteger tu colección.
                Creemos en el juego limpio, la comunidad y en compartir la
                alegría que estos juegos nos han brindado durante años.
              </p>
              <p>
                Más que una tienda, aspiramos a ser un centro para la comunidad
                TCG, ofreciendo noticias, guías y un lugar para conectar con
                otros jugadores. ¡Gracias por ser parte de nuestro viaje!
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/seed/about/800/600"
              alt="Equipo de la tienda"
              width={800}
              height={600}
              data-ai-hint="team photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
