import TopicCard from "@/components/TopicCard";
import { getSortedTopicList } from "@/lib/topics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tópicos | Wilson Neto",
  description: "Explore meus artigos e insights sobre boas práticas de engenharia de software, arquitetura, tecnologias em nuvem e desenvolvimento .NET. Navegue pelos tópicos que abordo abaixo.",
  keywords: ["Tópicos", "Engenharia de Software", "Design de Sistemas", "Arquitetura", "Computação em Nuvem", "Desenvolvimento de Software", ".NET", "Microsoft MVP"],
  openGraph: {
    title: "Tópicos | Wilson Neto",
    description: "Explore meus artigos e insights sobre boas práticas de engenharia de software, arquitetura, tecnologias em nuvem e desenvolvimento .NET. Navegue pelos tópicos que abordo abaixo.",
  },
  twitter: {
    title: "Tópicos | Wilson Neto",
    description: "Explore meus artigos e insights sobre boas práticas de engenharia de software, arquitetura, tecnologias em nuvem e desenvolvimento .NET. Navegue pelos tópicos que abordo abaixo.",
  }
};

export default function TopicsPage() {
  const topics = getSortedTopicList();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tópicos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore meus artigos e insights sobre boas práticas de engenharia de software, arquitetura, tecnologias em nuvem e desenvolvimento profissional. Navegue pelos tópicos que abordo abaixo.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {topics.map((topic) => <TopicCard key={topic.key} topic={topic} />)}
        </div>
      </div>
    </div>
  );
}