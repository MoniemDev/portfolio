import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import enMessages from "@/messages/en.json";

export default function BlogPage() {
  const t = enMessages.blog;
  const navT = enMessages.nav;
  const footerT = enMessages.footer;

  // Sample blog posts
  const posts = [
    {
      id: "1",
      title: "Getting Started with Next.js 14",
      excerpt: "Learn how to build modern web applications with Next.js 14 and the App Router.",
      image: "",
      date: "2024-01-15",
      author: "Moniem",
      category: "Web Development",
      slug: "getting-started-nextjs-14",
    },
    {
      id: "2",
      title: "The Power of TypeScript in React",
      excerpt: "Discover how TypeScript can improve your React development experience.",
      image: "",
      date: "2024-01-10",
      author: "Moniem",
      category: "Programming",
      slug: "typescript-in-react",
    },
    {
      id: "3",
      title: "UI/UX Design Best Practices",
      excerpt: "Essential design principles for creating user-friendly interfaces.",
      image: "",
      date: "2024-01-05",
      author: "Moniem",
      category: "Design",
      slug: "uiux-best-practices",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header t={navT} locale="en" />

      <main className="flex-1 pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
              <p className="text-xl text-muted-foreground">{t.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="flex flex-col">
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <span className="text-6xl">📝</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full">
                        {t.readMore}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer t={footerT} navT={navT} />
    </div>
  );
}
