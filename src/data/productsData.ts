export interface Product {
  id: string;
  collection: 'LAND' | 'RACING' | 'DIVE' | 'SKY';
  name: string;
  models: string[];
  timelineIds: number[];
}

export const productsData: Product[] = [
  {
    id: 'land',
    collection: 'LAND',
    name: 'The Guide',
    models: ['Sherpa Guide'],
    timelineIds: [2, 6, 14, 23],
  },
  {
    id: 'racing',
    collection: 'RACING',
    name: 'The Graph',
    models: ['Sherpa Graph'],
    timelineIds: [3, 12, 16, 21],
  },
  {
    id: 'dive',
    collection: 'DIVE',
    name: 'The Depth',
    models: ['Sherpa OPS', 'Sherpa Dive', 'Aquagraph'],
    timelineIds: [1, 5, 9, 19],
  },
  {
    id: 'sky',
    collection: 'SKY',
    name: 'The GMT',
    models: ['Sherpa Super Jet', 'Sherpa GMT'],
    timelineIds: [4, 11, 18],
  },
];
