export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Software Engineer with over {(new Date().getFullYear()) - 2010} years of experience, Microsoft MVP, focusing on modern software engineering practices and technologies.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I bring deep expertise in system and solution design, cloud-native architecture, and the development of highly scalable distributed systems. Over the years, I've led cross-functional teams on global-scale projects across the USA, Europe, and Brazil, combining strong technical leadership with hands-on experience in modern software engineering practices. I specialize in building robust microservices and event-driven architectures using mainly .Net and C#.
              <br />
              <br />
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Technical Leadership, leading teams and projects</li>
              <li>Teaching and mentoring</li>
              <li>Strong programming skills, mainly with .Net and C#</li>
              <li>Cloud environments: Azure, AWS</li>
              <li>Containers, Docker, and Kubernetes</li>
              <li>Microservices architecture</li>
              <li>Event-Driven Architecture</li>
              <li>Test-Driven Development</li>
              <li>DevOps and CI/CD</li>
              <li>Agile methodologies</li>
              <li>Cloud Native Applications and Architecture</li>
              <li>System and Solution Design</li>
              <li>Technical Design Documentation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education & Awards</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Awards:</strong> Microsoft Most Valuable Professional (MVP)
              <br /><br />
              <strong>Academic background:</strong>
              <br />
              Bachelor's Degree in Computer Science from UNORP São José do Rio Preto, Brazil
              <br />
              MBA in Software and Solution Architecture from IGTI, Brazil
              <br />
              <br />

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/wilsonnetobr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors no-underline"
              >
                Connect on LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 