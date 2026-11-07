export const company = {
  name: 'NOLI Paralegal',
  legalName: 'P H Afonso Campagnoli, ME',
  cnpj: '65.899.091/0001-94',
  address: 'Avenida Paulista, 1636 — São Paulo/SP',
  email: 'comercial@noliparalegal.com.br',
  phone: '(11) 93944-6804',
  phoneHref: 'tel:+5511939446804',
  whatsapp: '(11) 91196-5390',
  whatsappHref: 'https://wa.me/5511911965390',
  tagline: 'Apoio paralegal com rigor, discrição e precisão.',
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

export const credentials = [
  { value: '+4 anos', caption: 'de atuação em processos societários e cartoriais' },
  { value: '+500 empresas', caption: 'atendidas em todo o país' },
  { value: '20 Juntas Comerciais', caption: 'com processos já conduzidos' },
];

export const institutionalNav: NavLink[] = [
  { label: 'A NOLI', href: '/a-noli' },
  { label: 'Atuação Nacional', href: '/atuacao-nacional' },
  { label: 'Como Trabalhamos', href: '/como-trabalhamos' },
  { label: 'Política de Privacidade', href: '/privacidade' },
];
