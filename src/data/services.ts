export interface Service {
  slug: string;
  title: string;
  opening: string;
  listTitle: string;
  items: string[];
  /** Índices de `items` exibidos como exemplos em /servicos */
  examples: number[];
  detail?: { label: string; text: string };
  note?: string;
  closing?: string;
  showLegalNotice?: boolean;
}

export const services: Service[] = [
  {
    slug: 'societario',
    title: 'Societário e Juntas Comerciais',
    opening:
      'A vida registral de uma empresa começa na Junta Comercial e passa por ela a cada mudança relevante. Conduzimos todo o ciclo, da viabilidade ao arquivamento, com atenção às exigências específicas de cada Junta.',
    listTitle: 'O que fazemos',
    items: [
      'Constituição de sociedades limitadas, unipessoais e empresários individuais',
      'Alterações contratuais: entrada e saída de sócios, aumento e redução de capital, mudança de endereço, objeto social e administração',
      'Transformação de tipo societário',
      'Atas de reunião e assembleia de sócios, inclusive aprovação anual de contas',
      'Consolidações de contrato social',
      'Baixa, dissolução e encerramento de empresas',
      'Inscrições e atualizações na Receita Federal (DBE/Redesim), inscrição estadual e municipal',
      'Abertura e regularização de filiais em outros estados',
    ],
    examples: [0, 2, 5],
    detail: {
      label: 'Como conduzimos:',
      text: 'consulta de viabilidade, estruturação do ato, revisão por advogado parceiro quando exigida, protocolo, acompanhamento de exigências e entrega do documento arquivado.',
    },
  },
  {
    slug: 'imobiliario-e-cartorios',
    title: 'Imobiliário e Cartórios',
    opening:
      'Imóvel regular é imóvel que pode ser vendido, financiado, dado em garantia ou partilhado. Cuidamos do expediente nos cartórios de registro de imóveis e de notas, em São Paulo e em todo o Brasil.',
    listTitle: 'O que fazemos',
    items: [
      'Emissão de certidões de matrícula e transcrição em todo o Brasil',
      'Averbações: construção, demolição, casamento, óbito, alteração de denominação',
      'Registro de escrituras e títulos',
      'Regularização de imóveis com pendências registrais',
      'Escrituras e procurações em cartório de notas',
      'Reconhecimento de firma e autenticações',
      'Apuração e recolhimento de ITBI e ITCMD',
    ],
    examples: [0, 2, 5],
    note: 'Atuação presencial nos cartórios da cidade de São Paulo; nos demais municípios, por meio dos canais eletrônicos oficiais e de correspondentes.',
  },
  {
    slug: 'certidoes-e-regularizacoes',
    title: 'Certidões e Regularizações',
    opening:
      'Licitações, financiamentos, contratos e operações societárias dependem de certidões válidas. Emitimos, conferimos e, quando há pendência, cuidamos da regularização.',
    listTitle: 'O que fazemos',
    items: [
      'Certidões federais, estaduais, municipais, trabalhistas e do FGTS',
      'Certidões de Juntas Comerciais, cartórios de protesto e distribuidores',
      'Kits de certidões para licitação, due diligence e operações imobiliárias',
      'Regularização cadastral na Receita Federal, nas secretarias da Fazenda e nas prefeituras',
      'Credenciamento no SICAF',
      'Emissão e renovação de certificados digitais (e-CNPJ e e-CPF)',
    ],
    examples: [0, 4, 5],
  },
  {
    slug: 'monitoramento',
    title: 'Monitoramento Contínuo',
    opening:
      'Para empresas e escritórios que administram vários CNPJs, o risco está no que vence sem aviso. Em regime de assinatura mensal, acompanhamos a situação de cada empresa e avisamos antes que o problema apareça.',
    listTitle: 'O que acompanhamos',
    items: [
      'Validade e situação das certidões de cada CNPJ',
      'Alterações cadastrais e societárias registradas nos órgãos',
      'Publicações em Diário de Justiça Eletrônico',
      'Vencimentos de certificados digitais, procurações e atos periódicos',
    ],
    examples: [0, 2],
    closing: 'Relatório periódico e alerta imediato sempre que algo exigir providência.',
  },
  {
    slug: 'extrajudicial',
    title: 'Atos Extrajudiciais',
    opening:
      'Inventários, divórcios e usucapiões que antes levavam anos no Judiciário podem, em muitos casos, ser resolvidos em cartório. Esses atos exigem a assistência de advogado. A NOLI conduz todo o expediente documental, em conjunto com advogados parceiros.',
    listTitle: 'Atos em que atuamos',
    items: [
      'Inventário e partilha extrajudiciais',
      'Divórcio e dissolução de união estável extrajudiciais',
      'Usucapião extrajudicial',
    ],
    examples: [0, 1, 2],
    detail: {
      label: 'O papel da NOLI:',
      text: 'levantamento e organização de documentos, certidões, apuração de ITCMD, interlocução com o cartório e acompanhamento até o registro final.',
    },
    showLegalNotice: true,
  },
  {
    slug: 'documentos-estrangeiros',
    title: 'Documentos Estrangeiros',
    opening:
      'Documentos emitidos no exterior, ou destinados a ele, precisam percorrer um caminho próprio para produzir efeitos. Coordenamos todas as etapas.',
    listTitle: 'O que fazemos',
    items: [
      'Apostilamento de documentos brasileiros (Convenção da Apostila de Haia)',
      'Legalização de documentos estrangeiros para uso no Brasil',
      'Coordenação de tradução juramentada',
      'Análise de documentos estrangeiros para registro societário de sócios e empresas não residentes',
    ],
    examples: [0, 2],
  },
];
