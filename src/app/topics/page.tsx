import TopicCard from "@/components/TopicCard";
import { getSortedTopicList } from "@/lib/topics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topics | Wilson Neto",
  description: "Explore my articles and insights on software engineering best practices, architecture, cloud technologies, and .NET development. Browse the topics I cover below.",
  keywords: ["Topics", "Software Engineering", "System Design", "Architecture", "Cloud Computing", "Software Development", ".NET", "Microsoft MVP"],
  openGraph: {
    title: "Topics | Wilson Neto",
    description: "Explore my articles and insights on software engineering best practices, architecture, cloud technologies, and .NET development. Browse the topics I cover below.",
  },
  twitter: {
    title: "Topics | Wilson Neto",
    description: "Explore my articles and insights on software engineering best practices, architecture, cloud technologies, and .NET development. Browse the topics I cover below.",
  }
};

export default function TopicsPage() {
  const topics = getSortedTopicList();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Topics</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore my articles and insights on software engineering best practices, architecture, cloud technologies, and professional development. Browse the topics I cover below.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {topics.map((topic) => <TopicCard key={topic.key} topic={topic} />)}
        </div>
      </div>
    </div>
  );
}