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

export const serviceAreas: NavLink[] = [
  { label: 'Societário e Juntas Comerciais', href: '/servicos/societario' },
  { label: 'Imobiliário e Cartórios', href: '/servicos/imobiliario-e-cartorios' },
  { label: 'Certidões e Regularizações', href: '/servicos/certidoes-e-regularizacoes' },
  { label: 'Monitoramento Contínuo', href: '/servicos/monitoramento' },
  { label: 'Atos Extrajudiciais', href: '/servicos/extrajudicial' },
  { label: 'Documentos Estrangeiros', href: '/servicos/documentos-estrangeiros' },
];

export const institutionalNav: NavLink[] = [
  { label: 'A NOLI', href: '/a-noli' },
  { label: 'Atuação Nacional', href: '/atuacao-nacional' },
  { label: 'Como Trabalhamos', href: '/como-trabalhamos' },
  { label: 'Política de Privacidade', href: '/privacidade' },
];
