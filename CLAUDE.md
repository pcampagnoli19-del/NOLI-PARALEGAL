# Site NOLI Paralegal — contexto para o Claude Code

## O que é
Site institucional multipáginas da **NOLI Paralegal**, banca de apoio paralegal e
administrativo em São Paulo. Domínio: **noliparalegal.com.br**.

A especificação completa, com todos os textos, está em `docs/SPEC.md`.
**Leia antes de qualquer tarefa.** Os textos da spec são definitivos: não reescreva,
não resuma e não invente conteúdo novo sem pedir.

## Direção visual (inegociável)
Clássico e de elite, como uma banca tradicional. **Não** pode parecer startup ou empresa de tecnologia.
- Tipografia serifada nos títulos, sóbria no corpo (ver SPEC §3)
- Paleta: azul-marinho, marfim e um dourado discreto. Nada de gradiente, neon, glassmorphism
- Muito espaço em branco, filetes finos, numeração romana, versaletes
- Sem ilustração 3D, sem ícones coloridos, sem emoji, sem animação chamativa
- Cantos retos (no máximo 2px de arredondamento). Exceção: o quarto de círculo do logo,
  usado como elemento gráfico recorrente
- Também não pode parecer feito por IA. Ideia de design: tabelas com cara de cartório e o
  quarto de círculo do logo (ver SPEC §3, "Revisão v2")

## Proibidos (cara de IA)
- Sobretítulo em caixa-alta com filete acima de toda seção
- Faixa de números ou contadores
- Grade de cards idênticos com "Saiba mais"
- Grade de "pilares" ou valores genéricos
- Frases de efeito com antítese ou paralelismo ("X que não aparece. Y que aparece.")
- Travessão (—) em texto corrido
- Artigo antes de possessivo ("o nosso", "o seu")
- Palavras: soluções, precisão, rigor, excelência, descomplicar, ágil, eficiente, padrão de execução
- Chamada final em forma de pergunta retórica
- O fundador não aparece no site (nome, foto, trajetória). Nunca citar nomes de clientes,
  nem de clientes atendidos pela equipe antes da NOLI

## Stack
- Astro (site estático, multipáginas) + TypeScript
- CSS próprio com variáveis em `src/styles/tokens.css` (sem Tailwind, para manter controle fino do visual)
- Fontes via Google Fonts, com `font-display: swap`
- Formulário de contato: Formspree, ou rota serverless da Vercel enviando por Resend
- Deploy: Vercel, domínio `noliparalegal.com.br` (ver SPEC §7)

## Regras
- Todo o conteúdo em português do Brasil, registro formal
- Acessibilidade: contraste AA, `alt` em imagens, navegação por teclado, HTML semântico
- SEO: `title` e `meta description` próprios por página, Open Graph, `sitemap.xml`,
  `robots.txt`, dados estruturados `ProfessionalService` (subtipo de `LocalBusiness`; não usar
  `LegalService`, ver SPEC §6) com endereço e telefone
- Performance: Lighthouse ≥ 95 em todas as categorias; imagens em AVIF/WebP
- Responsivo: tudo funciona em 360px de largura
- **Nunca** use as palavras "advocacia", "advogado da NOLI" ou "consultoria jurídica" para
  descrever o que a NOLI faz. A NOLI não presta serviço advocatício (ver SPEC §6)

## Como trabalhar
- Uma etapa da SPEC §8 por vez. Planeje, espere aprovação e depois codifique
- Rode `npm run build` sem erros antes de dar a tarefa por concluída
- Commits pequenos, padrão Conventional Commits
