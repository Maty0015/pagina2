import { news } from "@/data/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = news.find((p) => p.slug === params.slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          data-ai-hint={article.imageHint}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container mx-auto px-4 py-8 text-white">
            <h1 className="font-headline text-3xl md:text-5xl font-bold">
              {article.title}
            </h1>
            <p className="mt-2 text-lg opacity-90">{formattedDate}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <p>{article.content}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
