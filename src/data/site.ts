export const company = {
  name: 'NOLI Paralegal',
  legalName: 'P H Afonso Campagnoli, ME',
  cnpj: '65.899.091/0001-94',
  address: 'Avenida Paulista, 1636, São Paulo/SP',
  email: 'comercial@noliparalegal.com.br',
  phone: '(11) 93944-6804',
  phoneHref: 'tel:+5511939446804',
  whatsapp: '(11) 91196-5390',
  whatsappHref: 'https://wa.me/5511911965390',
  tagline: 'Apoio paralegal e administrativo em São Paulo.',
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

export const mainNav: NavLink[] = [
  { label: 'A NOLI', href: '/a-noli' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Atuação Nacional', href: '/atuacao-nacional' },
  { label: 'Como Trabalhamos', href: '/como-trabalhamos' },
  { label: 'Contato', href: '/contato' },
];

export interface ServiceArea extends NavLink {
  numeral: string;
  summary: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    numeral: 'I',
    label: 'Societário e Juntas Comerciais',
    href: '/servicos/societario',
    summary: 'Abertura, alteração, transformação e encerramento de empresas.',
  },
  {
    numeral: 'II',
    label: 'Imobiliário e Cartórios',
    href: '/servicos/imobiliario-e-cartorios',
    summary: 'Matrículas, averbações, escrituras e regularização de imóveis.',
  },
  {
    numeral: 'III',
    label: 'Certidões e Regularizações',
    href: '/servicos/certidoes-e-regularizacoes',
    summary: 'Certidões em todas as esferas e saneamento de pendências cadastrais.',
  },
  {
    numeral: 'IV',
    label: 'Monitoramento Contínuo',
    href: '/servicos/monitoramento',
    summary: 'Acompanhamento mensal de certidões, registros e publicações.',
  },
  {
    numeral: 'V',
    label: 'Atos Extrajudiciais',
    href: '/servicos/extrajudicial',
    summary: 'Inventário, divórcio e usucapião extrajudiciais, com advogados parceiros.',
  },
  {
    numeral: 'VI',
    label: 'Documentos Estrangeiros',
    href: '/servicos/documentos-estrangeiros',
    summary: 'Apostilamento, legalização e coordenação de tradução juramentada.',
  },
];

export const institutionalNav: NavLink[] = [
  { label: 'A NOLI', href: '/a-noli' },
  { label: 'Atuação Nacional', href: '/atuacao-nacional' },
  { label: 'Como Trabalhamos', href: '/como-trabalhamos' },
  { label: 'Política de Privacidade', href: '/privacidade' },
];

export const experience =
  'A equipe da NOLI tem mais de 5 anos de experiência em processos societários e mais de 100 empresas atendidas, em 20 Juntas Comerciais. Já atendemos gestoras de venture capital, fintechs, empresas de reflorestamento e marcas de consumo.';

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
