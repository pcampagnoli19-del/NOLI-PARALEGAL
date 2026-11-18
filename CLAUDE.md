# Site NOLI Paralegal — contexto para o Claude Code

## O que é
Site institucional multipáginas da **NOLI Paralegal**, banca de apoio paralegal e
administrativo em São Paulo. Domínio: **noliparalegal.com.br**.

A especificação completa, com todos os textos, está em `docs/SPEC.md`.
**Leia antes de qualquer tarefa.** Os textos da spec são definitivos: não reescreva,
não resuma e não invente conteúdo novo sem pedir.

## Direção visual (v3, PDF "Redesign da Noli Paralegal" de 18/11/2026, em docs/)
Profissional e acessível: linguagem direta, escopo claro e contato humano. Não pode parecer
startup de tecnologia nem template de IA.
- Paleta: azul profundo #172D38 (ações e títulos), grafite #27343A (texto), marfim #F5F3EE
  (fundo), areia #C9A875 (só detalhes, nunca texto sobre fundo claro), verde mineral #52736F
  (elementos secundários). Nada de gradiente, neon, glassmorphism
- Tipografia: Manrope 600-700 nos títulos, Source Sans 3 no corpo e formulários
- Grade de 12 colunas no desktop e 4 no celular, largura útil máxima de 1.200 px
- Logo: geometria preservada; o quarto de círculo do logo é elemento gráfico recorrente
- Sem ilustração 3D, sem ícones coloridos, sem emoji, sem animação chamativa
- A marca nos textos é "Noli Paralegal"; o logo continua "NOLI"

## Proibidos
- Faixa de números ou contadores
- Grade de cards idênticos com "Saiba mais"
- Grade de "pilares" ou valores genéricos
- Frases de efeito com antítese ou paralelismo ("X que não aparece. Y que aparece.")
- Travessão (—) em texto corrido
- Palavras: precisão, rigor, excelência, descomplicar, ágil, eficiente, padrão de execução
- O fundador não aparece no site (nome, foto, trajetória). Nunca citar nomes de clientes,
  nem de clientes atendidos pela equipe antes da Noli
- Textos do PDF v3 valem como estão, mesmo usando "soluções", "a sua" ou pergunta no fecho

## Stack
- Astro (site estático, multipáginas) + TypeScript
- CSS próprio com variáveis em `src/styles/tokens.css` (sem Tailwind, para manter controle fino do visual)
- Fontes via Google Fonts (Manrope, Source Sans 3), com `font-display: swap`
- Formulário de contato: Formspree (variável PUBLIC_FORMSPREE_ENDPOINT na Vercel)
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
