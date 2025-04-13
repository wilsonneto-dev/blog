export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre mim
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Engenheiro de Software com mais de {(new Date().getFullYear()) - 2010} anos de experiência, Microsoft MVP, focado em práticas e tecnologias modernas de engenharia de software.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Experiência Profissional</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Trago profunda expertise em design de sistemas e soluções, arquitetura cloud-native e desenvolvimento de sistemas distribuídos altamente escaláveis. Ao longo dos anos, liderei equipes multidisciplinares em projetos de escala global nos EUA, Europa e Brasil, combinando forte liderança técnica com experiência prática em práticas modernas de engenharia de software. Sou especializado na construção de microsserviços robustos e arquiteturas orientadas a eventos, utilizando principalmente .Net e C#.
              <br />
              <br />
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Habilidades & Expertise</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Liderança técnica, conduzindo equipes e projetos</li>
              <li>Ensino e mentoria</li>
              <li>Fortes habilidades de programação, principalmente com .Net e C#</li>
              <li>Ambientes em nuvem: Azure, AWS</li>
              <li>Contêineres, Docker e Kubernetes</li>
              <li>Arquitetura de microsserviços</li>
              <li>Arquitetura orientada a eventos</li>
              <li>Desenvolvimento guiado por testes (TDD)</li>
              <li>DevOps e CI/CD</li>
              <li>Metodologias ágeis</li>
              <li>Aplicações e arquitetura Cloud Native</li>
              <li>Design de sistemas e soluções</li>
              <li>Documentação técnica de design</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Educação & Premiações</h2>
            
            <div className="mb-6">
              <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-2">Premiações:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Microsoft Most Valuable Professional (MVP)</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-2">Formação acadêmica:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Bacharelado em Ciência da Computação pela UNORP São José do Rio Preto, Brasil</li>
                <li>MBA em Arquitetura de Software e Soluções pelo IGTI, Brasil</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/wilsonnetobr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors no-underline"
              >
                Conecte-se no LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 