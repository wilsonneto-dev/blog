import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import TopicTags from '@/components/TopicTags';
import { Metadata } from 'next';
import ArrowIcon from '@/components/ArrowIcon';

export const metadata: Metadata = {
  title: "Blog | Wilson Neto",
  description: "Articles about software engineering, system design, architecture, cloud technologies, and best practices from my experience as a software engineer.",
  keywords: ["Blog", "Articles", "Software Development", "Software Engineering", "System Design", "Architecture", "Cloud", ".NET"],
  openGraph: {
    title: "Blog | Wilson Neto",
    description: "Articles about software engineering, system design, architecture, cloud technologies, and best practices from my experience as a software engineer.",
  },
  twitter: {
    title: "Blog | Wilson Neto",
    description: "Articles about software engineering, system design, architecture, cloud technologies, and best practices from my experience as a software engineer.",
  }
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Articles about software engineering, best practices, and insights from my professional experience.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => {
            return (
              <article key={post.id} className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US')}</time>
                  </div>
                  <TopicTags topics={post.topics} />
                  <Link href={`/posts/${encodeURIComponent(post.id)}`}>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                  <Link 
                    href={`/posts/${encodeURIComponent(post.id)}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Read more
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
} 