'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import  mermaid from 'mermaid';
import type { MermaidConfig } from 'mermaid';

export default function MermaidInitializer() {
  const pathname = usePathname();

  const processMermaidDiagrams = async () => {
    try {
      const mermaidCodeBlocks = getMermaidCodeBlocks();
      if (mermaidCodeBlocks.length === 0)
        return;    
      
      mermaid.initialize(getMermaidConfig());

      mermaidCodeBlocks.forEach((codeBlock, index) => {
        const content = codeBlock.textContent || '';
        const preElement = codeBlock.parentElement;
        const parentElement = preElement?.parentElement;

        if (preElement && parentElement) {
          const existingDiagram = parentElement.querySelector('.mermaid');
          if (existingDiagram) {
            existingDiagram.remove();
          }

          const diagramContainer = document.createElement('div');
          diagramContainer.className = 'mermaid';
          diagramContainer.id = `mermaid-diagram-${index}`;

          mermaid.render(`mermaid-diagram-${index}`, content)
            .then(({ svg }) => {
              diagramContainer.innerHTML = svg;
              parentElement.replaceChild(diagramContainer, preElement);
            })
            .catch((error) => {
              console.error('Erro ao renderizar diagrama Mermaid:', error);
            });
        }
      });

    } catch (error) {
      console.error('Erro ao processar diagramas Mermaid:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      processMermaidDiagrams();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

const getMermaidCodeBlocks = () => {
  return document.querySelectorAll('pre > code.language-mermaid');
}

const getMermaidConfig = (): MermaidConfig => {
  return {
    startOnLoad: false,
    securityLevel: 'loose',
    theme: 'base' as const,
    themeVariables: {
      primaryColor: '#4f46e5',
      primaryTextColor: '#1e293b',
      primaryBorderColor: '#6366f1',
      lineColor: '#4f46e5',
      secondaryColor: '#64748b',
      tertiaryColor: '#e2e8f0',
      fontFamily: 'system-ui, sans-serif',
      fontSize: '16px',
      nodeBorder: '#4f46e5',
      edgeLabelBackground: 'rgba(255, 255, 255, 0.8)',
      mainBkg: '#f8fafc',
      textColor: '#1e293b',
      arrowheadColor: '#4f46e5',
      labelColor: '#1e293b',
      edgeColor: '#4f46e5',
      nodeTextColor: '#1e293b',
      edgeTextColor: '#3730a3',
      edgeTextFontWeight: 'bold',
      edgeTextFontSize: '14px',
    },
    flowchart: {
      htmlLabels: true,
      curve: 'basis',
      useMaxWidth: true,
      rankSpacing: 100,
      nodeSpacing: 80,
      padding: 20,
    },
  }
}