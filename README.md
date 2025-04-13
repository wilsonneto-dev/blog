# Craft & Code Club Blog

Este é o repositório do blog da comunidade Craft & Code Club, uma comunidade dedicada ao artesanato de software, onde compartilhamos conhecimento sobre Algoritmos, Estruturas de Dados, System Design, Engenharia de Software Moderna, Domain-Driven Design, Clean Architecture e outros tópicos avançados de desenvolvimento de software.

## 🌟 Sobre a Comunidade

O Craft & Code Club é uma comunidade de desenvolvedores apaixonados por qualidade de código e boas práticas de desenvolvimento. Nosso objetivo é compartilhar conhecimento e experiências através de:

- 📝 Artigos técnicos no blog
- 🎥 Conteúdo no YouTube
- 💬 Discussões no Discord
- 🤝 Eventos e encontros
- 📖 Clube do Livro

## :rocket: Faça parte da Comunidade

Linkd para participar no Discord: \
https://discord.gg/V7hQJZSDYu

## 📋 Usando este Template

Este blog foi desenvolvido como um template open source, e você está convidado a usá-lo! Se você tem uma comunidade de tecnologia ou quer criar seu blog pessoal, sinta-se à vontade para fazer um fork e adaptar às suas necessidades.

### Como Usar

1. Faça um fork deste repositório
2. Personalize como quiser
3. Os posts eventos são escritos em Markdown e ficam na pasta `_content/`

## 🛠 Tecnologias Utilizadas

- **Next.js 15** - Framework React com suporte a SSG
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização e design system
- **next-themes** - Suporte a tema claro/escuro
- **remark** - Renderização de Markdown
- **gray-matter** - Parsing de frontmatter dos posts

## 🚀 Como Executar

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Build Estático

Este blog usa exportação estática do Next.js, permitindo hospedagem em qualquer servidor estático:

```bash
# Gerar build estático
npm run build

# Os arquivos estáticos estarão na pasta 'out'
```

### Configuração

1. Crie seus posts em Markdown na pasta `_content/posts/`
2. Configure os metadados do site em `src/app/layout.tsx`
3. Ajuste as cores e tema em `tailwind.config.js`
4. Personalize os componentes e páginas em `src/components/` e `src/app/`

## 📝 Criando Posts

Os posts devem ser criados na pasta `posts/` seguindo o formato:

```markdown
---
title: 'Título do Post'
date: '2024-03-20'
description: 'Descrição do post que aparecerá na listagem'
topics: ['ddd', 'arquitetura', 'boas-práticas']
---

Conteúdo do post em Markdown...
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você encontrou um bug ou tem uma sugestão de melhoria:

1. Abra uma issue descrevendo o problema/sugestão
2. Fork o repositório
3. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
4. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
5. Push para a branch (`git push origin feature/MinhaFeature`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com 💙 pela comunidade Craft & Code Club
