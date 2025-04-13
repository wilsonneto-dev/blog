import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { Metadata } from 'next';
import { getFeaturedTopicsSorted } from '@/lib/topics';
import TopicCard from '@/components/TopicCard';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.id);
  
  return {
    title: `${post.title} | Wilson Neto`,
    description: post.description,
    keywords: [...post.topics.map(topic => topic.name), "Blog", "Article", "Software Development", "Software Engineering", "Cloud", "Architecture", ".NET", "Microsoft MVP"],
    openGraph: {
      title: `${post.title} | Wilson Neto`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Wilson Neto'],
      tags: post.topics.map(topic => topic.name),
    },
    twitter: {
      title: `${post.title} | Wilson Neto`,
      description: post.description
    }
  };
}

export default async function Post({ params }: Props) {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.id);
  const featuredTopics = getFeaturedTopicsSorted();

  return (
    <div className="bg-white dark:bg-gray-900">
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </Link>
        </div>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US')}</time>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {topic.name}
              </Link>
            ))}
          </div>
        </header>
        <div className="prose dark:prose-dark prose-lg max-w-none border-b border-gray-200 dark:border-gray-700 pb-12">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </article>
      
      {/* Tópicos Relacionados */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Explore Tópicos Relacionados</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
              Confira os tópicos abaixo para mais artigos e insights sobre engenharia de software.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredTopics.map((topic) => <TopicCard key={topic.key} topic={topic} />)}
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              Ver todos os artigos
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 