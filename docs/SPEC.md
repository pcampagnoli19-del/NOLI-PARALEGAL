# Site NOLI Paralegal — Especificação e textos (v2.0, revisada em 13/11/2026)

> Coloque este arquivo em `docs/SPEC.md` no repositório.
> Trechos entre [COLCHETES] são informações a confirmar pelo Pedro antes de publicar.

---

## 1. Dados da empresa

| Campo | Valor |
|---|---|
| Nome fantasia | NOLI Paralegal |
| Razão social | P H Afonso Campagnoli, ME |
| CNPJ | 65.899.091/0001-94 |
| Endereço | Avenida Paulista, 1636, São Paulo/SP |
| E-mail | comercial@noliparalegal.com.br |
| Telefone (ligações) | (11) 93944-6804 |
| WhatsApp | (11) 91196-5390 → link `https://wa.me/5511911965390` |
| Domínio | noliparalegal.com.br |

## 2. Mapa do site

| Rota | Página |
|---|---|
| `/` | Início |
| `/a-noli` | A NOLI |
| `/servicos` | Serviços (visão geral) |
| `/servicos/societario` | Societário e Juntas Comerciais |
| `/servicos/imobiliario-e-cartorios` | Imobiliário e Cartórios |
| `/servicos/certidoes-e-regularizacoes` | Certidões e Regularizações |
| `/servicos/monitoramento` | Monitoramento Contínuo |
| `/servicos/extrajudicial` | Atos Extrajudiciais |
| `/servicos/documentos-estrangeiros` | Documentos Estrangeiros |
| `/atuacao-nacional` | Atuação Nacional |
| `/como-trabalhamos` | Como Trabalhamos |
| `/contato` | Contato |
| `/privacidade` | Política de Privacidade |

**Menu principal:** A NOLI · Serviços · Atuação Nacional · Como Trabalhamos · Contato
**Botão fixo no cabeçalho:** "Solicitar proposta" → `/contato`

---

## 3. Identidade visual

**Referência de tom:** bancas tradicionais, cartórios antigos, papelaria de alto padrão.
A sensação deve ser de discrição, solidez e precisão.

### Paleta
| Token | Cor | Uso |
|---|---|---|
| `--navy` | `#13233F` | Cabeçalho, rodapé, títulos, fundos de destaque |
| `--navy-deep` | `#0B1729` | Rodapé, faixas de contraste |
| `--ivory` | `#F7F3EA` | Fundo principal |
| `--paper` | `#FFFDF8` | Cartões e blocos sobre marfim |
| `--ink` | `#1E1E1E` | Texto corrido |
| `--muted` | `#5B5E66` | Texto secundário (validar contraste AA sobre marfim) |
| `--gold` | `#A8894E` | Filetes, numerais, detalhes. Nunca em blocos grandes |
| `--rule` | `#D9D1BF` | Linhas divisórias |

### Tipografia
- **Títulos:** Cormorant Garamond (600/700). Títulos grandes com leve espaçamento negativo
- **Sobretítulos e menu:** Cormorant SC ou versaletes do Cormorant, com espaçamento largo (0,14em)
- **Corpo:** EB Garamond 18–20px, entrelinha 1,65. Alternativa se a leitura ficar pesada: Source Serif 4
- **Números e dados:** algarismos old-style nos textos e lining nos números de destaque

### Revisão v2: sem "cara de IA"
A v1 usava o visual e o texto que todo gerador de IA entrega para "elegante e clássico". A v2 troca fórmula por conteúdo específico (prazos, setores, foto real da Paulista) e adota uma ideia de design própria: **tabelas com cara de cartório** e o **recorte em quarto de círculo do logo** como elemento recorrente. A lista de proibidos está no `CLAUDE.md`.

### Elementos
- Sem sobretítulos. Títulos de seção marcados com o quarto de círculo do logo, em navy
- Numeração romana (I, II, III…) nas listas de serviços e nas etapas do processo
- Divisor entre seções: filete com um quarto de círculo dourado no centro
- Fotografia: preto e branco. Hoje, uma vista aérea da Paulista (Wikimedia Commons, ProtoplasmaKid, CC BY-SA 4.0, com crédito e link da licença na legenda) (arquitetura da Paulista, livros, papel,
  mesa de trabalho). Nada de banco de imagens com pessoas sorrindo de terno
- Botões: retangulares, borda de 1px navy, texto em versaletes; hover inverte para navy cheio

### Logo
Logo azul-marinho: quadrado com recortes em quarto de círculo + "NOLI" / "PARALEGAL".
Arquivos em `public/brand/`, redesenhados em vetor a partir do logo enviado pelo Pedro.
Versões necessárias: navy sobre marfim e marfim sobre navy (para o rodapé).

---

## 4. Componentes globais

**Cabeçalho:** logo à esquerda, menu ao centro/direita, botão "Solicitar proposta".
No mobile: menu em gaveta, com telefone e WhatsApp visíveis.

**Rodapé (fundo navy-deep, texto marfim):**
- Logo + frase: *"Apoio paralegal e administrativo em São Paulo."*
- Coluna Contato: endereço, e-mail, telefone, WhatsApp
- Coluna Serviços: links das seis áreas
- Coluna Institucional: A NOLI · Atuação Nacional · Como Trabalhamos · Política de Privacidade
- Linha final: *"NOLI Paralegal · P H Afonso Campagnoli, ME · CNPJ 65.899.091/0001-94 · Avenida Paulista, 1636, São Paulo/SP"*
- Aviso (ver §6), em fonte menor

**Botão flutuante de WhatsApp:** discreto, navy com ícone em marfim, canto inferior direito.

---

## 5. Textos das páginas

### 5.1 Início (`/`)

**Topo**
- Título: **Abertura, alteração e regularização de empresas, do protocolo ao registro.**
- Texto: Cuidamos do processo na Junta Comercial, na Receita Federal, nas prefeituras e nos cartórios. Você acompanha cada etapa e recebe o documento registrado.
- Botões: [Solicitar proposta] [Falar pelo WhatsApp]
- Tabela "Prazos médios em São Paulo" (ato · onde · prazo):
  - Abertura de empresa · JUCESP e Receita Federal · 2 dias úteis
  - Alteração contratual · JUCESP · 5 dias úteis
  - Certidão de matrícula de imóvel · Cartório de Registro de Imóveis · 6 horas
  - Nota: Prazos com a documentação completa. Exigências do órgão podem aumentar o prazo. Em outros estados, os prazos variam.

**Foto da Paulista** em largura total, preto e branco, com crédito.

**O que fazemos:** as seis áreas em tabela (numeral · nome com link · resumo · dois ou três exemplos). Sem cards e sem "Saiba mais".

**Experiência:** A equipe da NOLI tem mais de 5 anos de experiência em processos societários e mais de 100 empresas atendidas, em 20 Juntas Comerciais. Já atendemos gestoras de venture capital, fintechs, empresas de reflorestamento e marcas de consumo. (Link: Ver as Juntas Comerciais em que atuamos)
- Os números e setores vêm da experiência prévia da equipe. Nunca citar nomes de clientes.

**Para quem:** Atendemos escritórios de contabilidade, escritórios de advocacia que delegam o expediente paralegal, departamentos jurídicos de empresas e empresários que precisam abrir, alterar ou regularizar uma empresa.

**Fecho:** Mande a situação pelo WhatsApp ou pelo formulário. Respondemos em até um dia útil com o que precisa ser feito, o prazo e o custo. Botões: [Solicitar proposta] [Falar pelo WhatsApp]

---

### 5.2 A NOLI (`/a-noli`)

- Título: **Sobre a NOLI**
- Texto: A NOLI Paralegal cuida do expediente societário, cartorial e cadastral de empresas e escritórios. Fica na Avenida Paulista, em São Paulo, e atende processos em todo o Brasil.

**Como trabalhamos** (numeração romana)
- I. Conferimos os dados contra o contrato social e o cadastro na Receita antes de protocolar, para evitar exigência.
- II. Informamos prazo e custo, com as taxas oficiais, antes de começar.
- III. Dados de clientes ficam restritos a quem precisa deles para o trabalho.
- IV. Atos que exigem advogado são feitos por advogados parceiros.

**Experiência:** o mesmo texto do Início.

O fundador não aparece no site (nome, foto ou trajetória).

---

### 5.3 Serviços — visão geral (`/servicos`)

- Título: **Serviços**
- Texto: Atuamos em seis áreas complementares. Cada uma pode ser contratada de forma avulsa, por ato, ou em regime de acompanhamento mensal.
- As seis áreas em tabela, como no Início

### 5.4 Societário e Juntas Comerciais (`/servicos/societario`)

- Título: **Societário e Juntas Comerciais**
- Abertura: A vida registral de uma empresa começa na Junta Comercial e passa por ela a cada mudança relevante. Conduzimos todo o ciclo, da viabilidade ao arquivamento, com atenção às exigências específicas de cada Junta.
- **O que fazemos:**
  - Constituição de sociedades limitadas, unipessoais e empresários individuais
  - Alterações contratuais: entrada e saída de sócios, aumento e redução de capital, mudança de endereço, objeto social e administração
  - Transformação de tipo societário
  - Atas de reunião e assembleia de sócios, inclusive aprovação anual de contas
  - Consolidações de contrato social
  - Baixa, dissolução e encerramento de empresas
  - Inscrições e atualizações na Receita Federal (DBE/Redesim), inscrição estadual e municipal
  - Abertura e regularização de filiais em outros estados
- **Como conduzimos:** consulta de viabilidade, estruturação do ato, revisão por advogado parceiro quando exigida, protocolo, acompanhamento de exigências e entrega do documento arquivado.

### 5.5 Imobiliário e Cartórios (`/servicos/imobiliario-e-cartorios`)

- Título: **Imobiliário e Cartórios**
- Abertura: Imóvel regular é imóvel que pode ser vendido, financiado, dado em garantia ou partilhado. Cuidamos do expediente nos cartórios de registro de imóveis e de notas, em São Paulo e em todo o Brasil.
- **O que fazemos:**
  - Emissão de certidões de matrícula e transcrição em todo o Brasil
  - Averbações: construção, demolição, casamento, óbito, alteração de denominação
  - Registro de escrituras e títulos
  - Regularização de imóveis com pendências registrais
  - Escrituras e procurações em cartório de notas
  - Reconhecimento de firma e autenticações
  - Apuração e recolhimento de ITBI e ITCMD
- Nota: Atuação presencial nos cartórios da cidade de São Paulo; nos demais municípios, por meio dos canais eletrônicos oficiais e de correspondentes.

### 5.6 Certidões e Regularizações (`/servicos/certidoes-e-regularizacoes`)

- Título: **Certidões e Regularizações**
- Abertura: Licitações, financiamentos, contratos e operações societárias dependem de certidões válidas. Emitimos, conferimos e, quando há pendência, cuidamos da regularização.
- **O que fazemos:**
  - Certidões federais, estaduais, municipais, trabalhistas e do FGTS
  - Certidões de Juntas Comerciais, cartórios de protesto e distribuidores
  - Kits de certidões para licitação, due diligence e operações imobiliárias
  - Regularização cadastral na Receita Federal, nas secretarias da Fazenda e nas prefeituras
  - Credenciamento no SICAF
  - Emissão e renovação de certificados digitais (e-CNPJ e e-CPF)

### 5.7 Monitoramento Contínuo (`/servicos/monitoramento`)

- Título: **Monitoramento Contínuo**
- Abertura: Para empresas e escritórios que administram vários CNPJs, o risco está no que vence sem aviso. Em regime de assinatura mensal, acompanhamos a situação de cada empresa e avisamos antes que o problema apareça.
- **O que acompanhamos:**
  - Validade e situação das certidões de cada CNPJ
  - Alterações cadastrais e societárias registradas nos órgãos
  - Publicações em Diário de Justiça Eletrônico
  - Vencimentos de certificados digitais, procurações e atos periódicos
- Fecho: Relatório periódico e alerta imediato sempre que algo exigir providência.

### 5.8 Atos Extrajudiciais (`/servicos/extrajudicial`)

- Título: **Atos Extrajudiciais**
- Abertura: Inventários, divórcios e usucapiões que antes levavam anos no Judiciário podem, em muitos casos, ser resolvidos em cartório. Esses atos exigem a assistência de advogado. A NOLI conduz todo o expediente documental, em conjunto com advogados parceiros.
- **Atos em que atuamos:**
  - Inventário e partilha extrajudiciais
  - Divórcio e dissolução de união estável extrajudiciais
  - Usucapião extrajudicial
- **O papel da NOLI:** levantamento e organização de documentos, certidões, apuração de ITCMD, interlocução com o cartório e acompanhamento até o registro final.

### 5.9 Documentos Estrangeiros (`/servicos/documentos-estrangeiros`)

- Título: **Documentos Estrangeiros**
- Abertura: Documentos emitidos no exterior, ou destinados a ele, precisam percorrer um caminho próprio para produzir efeitos. Coordenamos todas as etapas.
- **O que fazemos:**
  - Apostilamento de documentos brasileiros (Convenção da Apostila de Haia)
  - Legalização de documentos estrangeiros para uso no Brasil
  - Coordenação de tradução juramentada
  - Análise de documentos estrangeiros para registro societário de sócios e empresas não residentes

---

### 5.10 Atuação Nacional (`/atuacao-nacional`)

- Título: **Juntas Comerciais em que já atuamos**
- Texto: Cada Junta Comercial tem seu sistema, suas exigências e seu ritmo. A experiência acumulada em processos por todo o país permite antecipar o que cada uma vai pedir e protocolar certo da primeira vez.
- **Lista (em duas ou três colunas, agrupada por região):**
  - **Sudeste:** JUCESP (SP) · JUCERJA (RJ) · JUCEMG (MG) · JUCEES (ES)
  - **Sul:** JUCEPAR (PR) · JUCESC (SC) · JUCISRS (RS)
  - **Centro-Oeste:** JUCIS-DF (DF) · JUCEGO (GO) · JUCEMAT (MT)
  - **Norte:** JUCEPA (PA)
  - **Nordeste:** JUCEB (BA) · JUCEC (CE) · JUCEP (PB) · JUCEMA (MA) · JUCEPI (PI) · JUCERN (RN) · JUCEPE (PE) · JUCEAL (AL) · JUCESE (SE)
- [Pedro: confirmar as siglas oficiais das Juntas do Nordeste incluídas: MA, PI, RN, PE, AL, SE]
- Mapa do Brasil com os 27 estados: os 20 da lista em navy e os demais em hachura. Sem cores vivas. Malha territorial: IBGE.
- Legenda: "Juntas Comerciais com processos já conduzidos" e "Demais Juntas Comerciais: disponibilidade sob consulta".
- Nota do mapa: Também atendemos processos nas Juntas Comerciais dos demais estados: Acre, Amapá, Amazonas, Mato Grosso do Sul, Rondônia, Roraima e Tocantins. Nesses casos, a disponibilidade é verificada a cada demanda.

### 5.11 Como Trabalhamos (`/como-trabalhamos`)

- Título: **Como funciona um processo**
- Etapas (numeração romana, linha vertical dourada ligando as etapas):
  - **I. Diagnóstico** — Entendemos a situação, levantamos a documentação existente e identificamos pendências.
  - **II. Proposta** — Escopo, prazo estimado e custos detalhados, incluindo taxas oficiais, antes de qualquer execução.
  - **III. Estruturação** — Preparamos os atos e formulários e conferimos cada dado contra os registros oficiais.
  - **IV. Revisão** — Quando o ato exige, a documentação passa pela revisão de advogado parceiro.
  - **V. Protocolo e acompanhamento** — Protocolamos, acompanhamos a análise e respondemos às exigências dentro do prazo.
  - **VI. Entrega** — O cliente recebe o ato concluído, os documentos arquivados e um resumo do que foi feito.
- **Formas de contratação:**
  - **Por ato:** para demandas pontuais
  - **Assinatura mensal:** para carteiras de empresas com expediente recorrente e monitoramento

### 5.12 Contato (`/contato`)

- Título: **Fale com a NOLI**
- Texto: Descreva sua demanda. Retornamos em até um dia útil.
- Formulário: Nome · Empresa/escritório · E-mail · Telefone · Área (seleção com as seis áreas + "Outro") · Mensagem · caixa obrigatória "Li e concordo com a Política de Privacidade"
- Ao lado: endereço, e-mail, telefone, WhatsApp e horário [Seg a Sex, 9h às 18h — confirmar]
- Mapa: incorporação estática ou link para o Google Maps (não carregar iframe do Maps antes do clique, por performance e privacidade)

### 5.13 Política de Privacidade (`/privacidade`)
Texto padrão LGPD: quais dados o formulário coleta (nome, contato, mensagem), finalidade
(responder a solicitação e elaborar proposta), base legal, retenção, direitos do titular e canal
de contato (comercial@noliparalegal.com.br). Sem cookies de rastreamento; se houver analytics,
usar ferramenta sem cookies (Vercel Analytics ou Plausible).

---

## 6. Aviso legal (obrigatório)

Exibir no rodapé de todas as páginas e na página de Atos Extrajudiciais:

> A NOLI Paralegal presta serviços de apoio paralegal e administrativo e não exerce atividade advocatícia. Atos privativos de advogado são realizados por profissionais inscritos na OAB, contratados ou indicados conforme o caso.

Motivo: a NOLI opera sem advogado em tempo integral. O site não pode, em nenhum texto, oferecer
consultoria jurídica, representação ou "serviços jurídicos" em nome próprio.

---

## 7. Domínio `noliparalegal.com.br`

O domínio está registrado no Registro.br (todo `.com.br` fica lá). Para apontá-lo para o site:

### O que o Claude Code faz sozinho
- Configura o projeto para deploy na Vercel (`vercel.json`, se necessário)
- Define o domínio canônico `https://noliparalegal.com.br` no Astro (`site` em `astro.config`),
  no sitemap, nas tags canônicas e no Open Graph
- Configura o redirecionamento `www.noliparalegal.com.br` → `noliparalegal.com.br`
- **Se o Pedro fornecer um token da Vercel** (variável `VERCEL_TOKEN`), adiciona o domínio
  ao projeto pela CLI: `vercel domains add noliparalegal.com.br` e `vercel domains add www.noliparalegal.com.br`

### O que só o Pedro pode fazer (exige login nas contas dele)
1. **Vercel:** importar o repositório (vercel.com → Add New → Project), fazer o primeiro deploy
   e, em Settings → Domains, adicionar `noliparalegal.com.br` e `www.noliparalegal.com.br`.
   A Vercel mostra os registros DNS exatos que precisam ser criados.
2. **Registro.br:** entrar em registro.br → domínio `noliparalegal.com.br` → DNS → editar zona
   e criar os registros mostrados pela Vercel (tipicamente um registro **A** para o domínio
   raiz e um **CNAME** para o `www`). Usar sempre os valores exibidos no painel da Vercel.
3. Aguardar a propagação (de minutos a algumas horas). A Vercel emite o certificado HTTPS sozinha.

### Atenção ao e-mail
O e-mail `comercial@noliparalegal.com.br` usa o mesmo domínio. Ao editar a zona DNS, **não apagar
os registros MX, SPF, DKIM nem DMARC** já existentes, senão o e-mail para de funcionar. Mexer
só nos registros do site (A e CNAME do `www`).

### Site antigo
O site atual no Lovable (`noliparalegal-solid-web.lovable.app`) deve ser desativado ou
redirecionado para o domínio novo depois que este estiver no ar, para não haver duas versões indexadas.

---

## 8. Etapas de entrega

| Etapa | Escopo | Pronto quando |
|---|---|---|
| 1 | Setup Astro, tokens de cor/tipografia, cabeçalho, rodapé, aviso legal | Layout base aprovado visualmente no desktop e no mobile |
| 2 | Início + A NOLI | Textos exatos da spec, credenciais e seções completas |
| 3 | Serviços (visão geral + 6 páginas) | Todas as rotas navegáveis a partir do menu e do Início |
| 4 | Atuação Nacional + Como Trabalhamos | Lista de Juntas por região e etapas com numeração romana |
| 5 | Contato + formulário + Privacidade | Mensagem de teste chega em comercial@noliparalegal.com.br |
| 6 | SEO, dados estruturados, sitemap, performance | Lighthouse ≥ 95; sitemap e robots publicados |
| 7 | Deploy na Vercel + domínio (§7) | Site no ar em https://noliparalegal.com.br com HTTPS |

## 9. Pendências a confirmar pelo Pedro
- Siglas das Juntas do Nordeste
- Horário de atendimento

- Ferramenta do formulário: Formspree (mais simples) ou Resend (mais controle)
