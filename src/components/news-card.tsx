import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { NewsArticle } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
    const formattedDate = new Date(article.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
            <Link href={`/news/${article.slug}`}>
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    width={1200}
                    height={800}
                    data-ai-hint={article.imageHint}
                    className="w-full h-48 object-cover"
                />
            </Link>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
            <p className="text-sm text-muted-foreground mb-2">{formattedDate}</p>
            <CardTitle className="text-xl font-headline mb-2 leading-tight">
                <Link href={`/news/${article.slug}`} className="hover:text-primary transition-colors">
                    {article.title}
                </Link>
            </CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-3">{article.content}</p>
        </CardContent>
        <CardFooter className="p-4">
            <Link href={`/news/${article.slug}`} className="text-primary font-semibold hover:underline flex items-center">
                Leer más <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </CardFooter>
    </Card>
  );
}
