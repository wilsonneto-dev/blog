import { getEvent, getEvents } from '@/lib/events';
import type { Event } from '@/lib/events';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const { allEvents } = await getEvents();
  
  return allEvents.map((event: Event) => ({
    id: event.id
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const event = await getEvent(resolvedParams.id);
  
  if (!event) {
    return {
      title: 'Evento não encontrado | Craft & Code Club',
    };
  }
  
  return {
    title: `${event.title} | Craft & Code Club`,
    description: event.description,
    openGraph: {
      title: `${event.title} | Craft & Code Club`,
      description: event.description,
    },
    twitter: {
      title: `${event.title} | Craft & Code Club`,
      description: event.description,
    }
  };
}

export default async function EventPage({ params }: Props) {
  const resolvedParams = await params;
  const event = await getEvent(resolvedParams.id);
  
  if (!event) {
    notFound();
  }
  
  const { upcoming } = await getEvents();
  const nextEvents = upcoming.slice(0, 4);
  
  // Format date to local date string
  const formattedDate = new Date(event.date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  // Check if the event is today
  const today = new Date().toISOString().split('T')[0];
  const isToday = event.date === today;
  
  // Generate calendar URL
  const getCalendarUrl = (event: Event) => {
    const startDate = new Date(`${event.date}T${event.time.split('-')[0]}-03:00`);
    const endDate = new Date(`${event.date}T${event.time.split('-')[1]}-03:00`);

    const url = new URL('https://calendar.google.com/calendar/render');
    url.searchParams.append('action', 'TEMPLATE');
    url.searchParams.append('text', event.title);
    url.searchParams.append('details', `${event.description}${event.registrationLink ? `\n\n<a href="${event.registrationLink}">Link para o evento (${event.registrationLink})</a>` : ''}`);
    url.searchParams.append('location', event.location);
    url.searchParams.append('dates', `${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`);
    
    return url.toString();
  };
  
  const EventCard = ({ event }: { event: Event }) => {
    return (
      <article className="flex flex-col h-full rounded-lg shadow-sm border overflow-hidden transition-all hover:shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:ring-2 hover:ring-blue-500 dark:hover:ring-blue-400 hover:border-blue-200 dark:hover:border-blue-800">
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <time dateTime={event.date}>{new Date(event.date).toLocaleDateString('pt-BR')}</time>
            <span>•</span>
            <span>{event.time}</span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
          
          <div className="mt-auto">
            <Link
              href={`/events/${event.id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Ver detalhes &rarr;
            </Link>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            href="/events"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center mb-4"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para Eventos
          </Link>
          
          <div className={`rounded-lg shadow-md border overflow-hidden ${
            isToday 
              ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
          }`}>
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <time dateTime={event.date}>{formattedDate}</time>
                  <span>•</span>
                  <span>{event.time}</span>
                  <span>•</span>
                  <span className="capitalize">{event.type}</span>
                  {isToday && (
                    <>
                      <span>•</span>
                      <span className="text-green-600 dark:text-green-400 font-medium animate-pulse">Acontecendo Hoje!</span>
                    </>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{event.title}</h1>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                  <p>{event.description}</p>
                </div>
                
                {event.speakers && event.speakers.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Palestrantes</h2>
                    <ul className="space-y-2">
                      {event.speakers.map((speaker, index) => (
                        <li key={index} className="flex items-center text-gray-800 dark:text-gray-200">
                          <svg className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {speaker}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="space-y-3">
                  {isToday ? (
                    <div className="flex gap-3">
                      {event.registrationLink ? (
                        <a
                          href={event.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 rounded-md transition-colors bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-medium"
                        >
                          Participar Agora
                        </a>
                      ) : (
                        <a
                          href="https://discord.gg/cqF9THUfnN"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 rounded-md transition-colors bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-medium"
                        >
                          Participar via Discord
                        </a>
                      )}
                      <a
                        href="https://discord.gg/cqF9THUfnN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-md transition-colors bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white"
                      >
                        Entrar no Discord
                      </a>
                    </div>
                  ) : new Date(event.date) > new Date() ? (
                    <div className="flex gap-3">
                      <a
                        href={getCalendarUrl(event)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-md transition-colors bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white"
                      >
                        Adicionar ao Calendário
                      </a>
                      <a
                        href="https://discord.gg/cqF9THUfnN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-md transition-colors bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white"
                      >
                        Entrar no Discord
                      </a>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      { event.recordingLink && (
                        <a
                          href={event.recordingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center px-4 py-2 rounded-md transition-colors bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white"
                        >
                          Assistir Gravação
                        </a>
                      ) }
                      { event.postLink && (
                        <a
                          href={event.postLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center px-4 py-2 rounded-md transition-colors bg-purple-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white"
                        >
                          Ler Artigo
                        </a>
                      ) }
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {nextEvents.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Próximos Eventos</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {nextEvents.map((nextEvent) => (
                <EventCard key={nextEvent.id} event={nextEvent} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 