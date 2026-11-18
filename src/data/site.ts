export const company = {
  name: 'Noli Paralegal',
  legalName: 'P H Afonso Campagnoli, ME',
  cnpj: '65.899.091/0001-94',
  address: 'Avenida Paulista, 1636, São Paulo/SP',
  email: 'comercial@noliparalegal.com.br',
  phone: '(11) 93944-6804',
  phoneHref: 'tel:+5511939446804',
  whatsapp: '(11) 91196-5390',
  whatsappHref: 'https://wa.me/5511911965390',
  tagline: 'Noli Paralegal · Apoio paralegal e administrativo.',
  hours: 'Seg a Sex, 9h às 18h',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Avenida+Paulista%2C+1636%2C+S%C3%A3o+Paulo%2C+SP',
} as const;

export const legalNotice =
  'A NOLI Paralegal presta serviços de apoio paralegal e administrativo e não exerce atividade advocatícia. Atos privativos de advogado são realizados por profissionais inscritos na OAB, contratados ou indicados conforme o caso.';

export const footerLine = `${company.name} · ${company.legalName} · CNPJ ${company.cnpj} · ${company.address}`;

export interface NavLink {
  label: string;
  href: string;
}

export const audienceNav: NavLink[] = [
  { label: 'Para contabilidades', href: '/para-contabilidades' },
  { label: 'Para escritórios de advocacia', href: '/para-advocacia' },
  { label: 'Para empresas e empresários', href: '/para-empresas' },
];

/** Menu principal. 'Para quem' abre audienceNav. */
export const mainNav: NavLink[] = [
  { label: 'Serviços', href: '/servicos' },
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Como trabalhamos', href: '/como-trabalhamos' },
  { label: 'Sobre a Noli', href: '/a-noli' },
  { label: 'Contato', href: '/contato' },
];

export const footerNav: NavLink[] = [
  { label: 'Serviços', href: '/servicos' },
  { label: 'Contabilidades', href: '/para-contabilidades' },
  { label: 'Advocacia', href: '/para-advocacia' },
  { label: 'Empresas', href: '/para-empresas' },
  { label: 'Sobre a Noli', href: '/a-noli' },
  { label: 'Atuação nacional', href: '/atuacao-nacional' },
  { label: 'Como trabalhamos', href: '/como-trabalhamos' },
  { label: 'Grupo Noli', href: '/grupo-noli' },
  { label: 'Contato', href: '/contato' },
  { label: 'Política de privacidade', href: '/privacidade' },
];

export interface ServiceArea extends NavLink {
  /** Identificador usado na pré-seleção do formulário (?servico=) */
  id: string;
  numeral: string;
  summary: string;
  /** Resumo usado no Início (texto do PDF de redesign) */
  homeSummary: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    numeral: 'I',
    label: 'Societário e Juntas Comerciais',
    id: 'societario',
    href: '/servicos/societario',
    homeSummary: 'Abertura, alteração, transformação e encerramento de empresas, com acompanhamento do registro.',
    summary: 'Abertura, alteração, transformação e encerramento de empresas.',
  },
  {
    numeral: 'II',
    label: 'Imobiliário e Cartórios',
    id: 'imobiliario-e-cartorios',
    href: '/servicos/imobiliario-e-cartorios',
    homeSummary: 'Obtenção de matrículas e certidões e apoio em averbações e registros.',
    summary: 'Matrículas, averbações, escrituras e regularização de imóveis.',
  },
  {
    numeral: 'III',
    label: 'Certidões e Regularizações',
    id: 'certidoes-e-regularizacoes',
    href: '/servicos/certidoes-e-regularizacoes',
    homeSummary: 'Emissão de certidões e apoio na identificação e resolução de pendências cadastrais.',
    summary: 'Certidões em todas as esferas e saneamento de pendências cadastrais.',
  },
  {
    numeral: 'IV',
    label: 'Monitoramento Contínuo',
    id: 'monitoramento',
    href: '/servicos/monitoramento',
    homeSummary: 'Acompanhamento periódico de certidões, registros e publicações conforme o serviço contratado.',
    summary: 'Acompanhamento mensal de certidões, registros e publicações.',
  },
  {
    numeral: 'V',
    label: 'Atos Extrajudiciais',
    id: 'extrajudicial',
    href: '/servicos/extrajudicial',
    homeSummary: 'Apoio documental e administrativo em procedimentos de cartório, com participação de advogado habilitado quando exigida.',
    summary: 'Inventário, divórcio e usucapião extrajudiciais, com advogados parceiros.',
  },
  {
    numeral: 'VI',
    label: 'Documentos Estrangeiros',
    id: 'documentos-estrangeiros',
    href: '/servicos/documentos-estrangeiros',
    homeSummary: 'Apoio em apostilamento e legalização e coordenação de tradução juramentada.',
    summary: 'Apostilamento, legalização e coordenação de tradução juramentada.',
  },
];

export const experience =
  'A equipe da Noli tem mais de 5 anos de experiência em processos societários e mais de 100 empresas atendidas, em 20 Juntas Comerciais. Já atendemos gestoras de venture capital, fintechs, empresas de reflorestamento e marcas de consumo.';

export interface Deadline {
  act: string;
  where: string;
  time: string;
  area: string;
}

/** Prazos médios em São Paulo, com a documentação completa */
export const deadlines: Deadline[] = [
  { act: 'Abertura de empresa', where: 'JUCESP e Receita Federal', time: '2 dias úteis', area: 'societario' },
  { act: 'Alteração contratual', where: 'JUCESP', time: '5 dias úteis', area: 'societario' },
  { act: 'Certidão de matrícula de imóvel', where: 'Cartório de Registro de Imóveis', time: '6 horas', area: 'imobiliario-e-cartorios' },
];

export const deadlineNote =
  'Prazos com a documentação completa. Exigências do órgão podem aumentar o prazo. Em outros estados, os prazos variam.';

export const profiles = [
  { id: 'contabilidade', label: 'Contabilidade' },
  { id: 'advocacia', label: 'Advocacia' },
  { id: 'empresa', label: 'Empresa ou empresário' },
  { id: 'outro', label: 'Outro' },
] as const;

export const engagementTypes = [
  { id: 'pontual', label: 'Demanda pontual' },
  { id: 'recorrente', label: 'Atendimento recorrente' },
  { id: 'nao-sei', label: 'Ainda não sei' },
] as const;

/** Monta o link de /contato com perfil, serviço e tipo pré-selecionados (nunca dados pessoais) */
export const contactHref = (params: { perfil?: string; servico?: string; tipo?: string } = {}) => {
  const query = new URLSearchParams(
    Object.entries(params).filter((entry): entry is [string, string] => Boolean(entry[1])),
  ).toString();
  return query ? `/contato?${query}` : '/contato';
};
