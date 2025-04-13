import { getEvents } from '@/lib/events';
import type { Event } from '@/lib/events';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Eventos | Craft & Code Club",
  description: "Participe dos nossos encontros sobre engenharia de software, System Design, Algoritmos, e muito mais.",
  keywords: ["Eventos", "Workshops", "Meetups", "Comunidade", "Desenvolvimento de Software", "Algoritmos", "Estruturas de Dados", "System Design", "DDD"],
  openGraph: {
    title: "Eventos | Craft & Code Club",
    description: "Participe dos nossos encontros sobre engenharia de software, System Design, Algoritmos, e muito mais.",
  },
  twitter: {
    title: "Eventos | Craft & Code Club",
    description: "Participe dos nossos encontros sobre engenharia de software, System Design, Algoritmos, e muito mais.",
  }
};

export default async function EventsPage() {
  const { upcoming, past } = await getEvents(6);

  const EventCard = ({ event, isPast }: { event: Event; isPast: boolean }) => {
    const today = new Date().toISOString().split('T')[0];
    const isToday = event.date === today;

    const getCalendarUrl = (event: Event) => {
      const startDate = new Date(`${event.date}T${event.time.split('-')[0]}-03:00`);
      const endDate = new Date(`${event.date}T${event.time.split('-')[1]}-03:00`);

      const url = new URL('https://calendar.google.com/calendar/render');
      url.searchParams.append('action', 'TEMPLATE');
      url.searchParams.append('text', event.title);
      url.searchParams.append('details', `${event.description}\n\n<a href="${event.registrationLink}">Link para o evento (${event.registrationLink})</a>`);
      url.searchParams.append('location', event.location);
      url.searchParams.append('dates', `${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`);
      
      return url.toString();
    };

    return (
      <article className={`flex flex-col h-full rounded-lg shadow-sm border overflow-hidden transition-all hover:shadow-lg ${
        isToday 
          ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 ring-2 ring-blue-500 dark:ring-blue-400'
          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:ring-2 hover:ring-blue-500 dark:hover:ring-blue-400 hover:border-blue-200 dark:hover:border-blue-800'
      }`}>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <time dateTime={event.date}>{new Date(event.date).toLocaleDateString('pt-BR')}</time>
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
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{event.title}</h3>
          
          <div className="flex-grow flex flex-col">
            <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
            
            <div className="mt-auto space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{event.location}</span>
              </div>
              
              {event.speakers && event.speakers.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Palestrantes:</h4>
                  <ul className="space-y-1">
                    {event.speakers.map((speaker, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">{speaker}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-6 pt-0 mt-auto space-y-3">
          {isPast && !isToday ? (
            <div className="flex gap-3">
              <Link
                href={`/events/${event.id}`}
                className="flex-1 text-center px-4 py-2 rounded-md transition-colors bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white"
              >
                Ver Detalhes
              </Link>

            { event.recordingLink && 
              <a
                href={event.recordingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 block w-full text-center px-4 py-2 rounded-md transition-colors bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white"
              >
                Assistir Gravação
              </a>
            }</div>
          ) : isToday ? (
            <div className="flex gap-3">
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 rounded-md transition-colors bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-medium"
              >
                Participar Agora
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
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Próximos Eventos</h2>
            {upcoming.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2">
                {upcoming.map((event) => (
                  <EventCard key={event.id} event={event} isPast={false} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">Nenhum evento programado. Volte em breve!</p>
            )}
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Eventos Anteriores</h2>
            {past.length > 0 ? (
              <>
                <div className="grid gap-8 md:grid-cols-2 mb-8">
                  {past.map((event) => (
                    <EventCard key={event.id} event={event} isPast={true} />
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link 
                    href="/events/past/1" 
                    className="text-center px-4 py-2 rounded-md transition-colors bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white"
                  >
                    Ver todos os eventos anteriores
                  </Link>
                </div>
              </>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">Nenhum evento anterior para exibir.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
} 