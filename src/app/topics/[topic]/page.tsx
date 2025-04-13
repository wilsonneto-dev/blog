import { getSortedPostsData } from '@/lib/posts';
import escapeHtml from 'escape-html';
import Link from 'next/link';
import TopicTags from '@/components/TopicTags';
import { Metadata } from 'next';
import { getSortedTopicList, getTopicBySlug } from '@/lib/topics';

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  return getSortedTopicList().map((topic) => ({
    topic: topic.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const topic = getTopicBySlug(resolvedParams.topic);
  const topicTitle = topic.name;
  const topicDescription = topic.description ?? `Articles and resources about ${topicTitle}.`;
  const topicKeywords = [topicTitle, "Software Development", "Software Engineering", "Microsoft MVP", "Cloud", "Architecture", ".NET", "System Design"];

  return {
    title: `${topicTitle} | Wilson Neto`,
    description: topicDescription,
    keywords: topicKeywords,
    openGraph: {
      title: `${topicTitle} | Wilson Neto`,
      description: topicDescription,
    },
    twitter: {
      title: `${topicTitle} | Wilson Neto`,
      description: topicDescription,
    }
  };
}

export default async function TopicPage({ params }: Props) {
  const resolvedParams = await params;

  const topic = getTopicBySlug(resolvedParams.topic);
  const allPosts = getSortedPostsData();
  const posts = allPosts.filter(post => post.topics.filter(filterTopic => filterTopic.key === topic.key).length > 0);
  const topicTitle = topic.name;
  const topicDescription = topic.description ?? `Articles and resources about ${topicTitle} from Wilson Neto's blog.`;

  return (
    <div className="bg-white dark:bg-gray-900 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{topicTitle}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {topicDescription}
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              No articles about {topicTitle.toLowerCase()} yet
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m working on bringing content about this topic soon.
            </p>
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              View all articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => {              
              return (
                <article key={post.id} className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US')}</time>
                    </div>
                    <TopicTags topics={post.topics} />
                    <Link href={`/posts/${escapeHtml(post.id)}`}>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                    <Link 
                      href={`/posts/${escapeHtml(post.id)}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
} 