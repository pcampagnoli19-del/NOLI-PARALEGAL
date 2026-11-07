export interface Board {
  name: string;
  uf: string;
}

export interface Region {
  name: string;
  boards: Board[];
}

export const regions: Region[] = [
  {
    name: 'Sudeste',
    boards: [
      { name: 'JUCESP', uf: 'SP' },
      { name: 'JUCERJA', uf: 'RJ' },
      { name: 'JUCEMG', uf: 'MG' },
      { name: 'JUCEES', uf: 'ES' },
    ],
  },
  {
    name: 'Sul',
    boards: [
      { name: 'JUCEPAR', uf: 'PR' },
      { name: 'JUCESC', uf: 'SC' },
      { name: 'JUCISRS', uf: 'RS' },
    ],
  },
  {
    name: 'Centro-Oeste',
    boards: [
      { name: 'JUCIS-DF', uf: 'DF' },
      { name: 'JUCEGO', uf: 'GO' },
      { name: 'JUCEMAT', uf: 'MT' },
    ],
  },
  {
    name: 'Norte',
    boards: [{ name: 'JUCEPA', uf: 'PA' }],
  },
  {
    name: 'Nordeste',
    boards: [
      { name: 'JUCEB', uf: 'BA' },
      { name: 'JUCEC', uf: 'CE' },
      { name: 'JUCEP', uf: 'PB' },
      { name: 'JUCEMA', uf: 'MA' },
      { name: 'JUCEPI', uf: 'PI' },
      { name: 'JUCERN', uf: 'RN' },
      { name: 'JUCEPE', uf: 'PE' },
      { name: 'JUCEAL', uf: 'AL' },
      { name: 'JUCESE', uf: 'SE' },
    ],
  },
];
