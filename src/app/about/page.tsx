export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Wilson Neto
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Senior Fullstack Software Engineer, Microsoft MVP, based in São Paulo, Brazil, focused on modern software development technologies and cloud platforms.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I am experienced in system and solution design and architecture, highly scalable distributed systems, global-scale projects, and agile methodologies, including Scrum and SAFe, at large companies. 
              Proficient in Test-Driven Development, Cloud Native Applications, DevOps best practices, and creating technical design documentation.
              <br />
              <br />
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I have been working as a software engineer since 2010, providing valuable, scalable, and maintainable software solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Programming with C#, JavaScript, TypeScript, Python</li>
              <li>Frameworks such as .NET, Fast API, React.js, and Next.js</li>
              <li>Cloud environments: Azure, AWS</li>
              <li>Containers, Docker, and Kubernetes</li>
              <li>Microservices architecture</li>
              <li>Test-Driven Development</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education & Awards</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Awards:</strong> Microsoft Most Valuable Professional (MVP)
              <br /><br />
              <strong>Academic background:</strong>
              <br />
              Bachelor's Degree in Computer Science from UNORP São José do Rio Preto
              <br />
              MBA in Software and Solution Architecture from IGTI (currently enrolled)
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