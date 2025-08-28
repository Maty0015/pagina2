export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Tienda Estática TCG. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
