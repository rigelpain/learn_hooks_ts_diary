export type Tag = string;

export interface Spot {
  name: string;
  photo: string;
  paragraph: string;
  tags: {
    adjective: Tag[];
    location: Tag[];
    object: Tag[];
    verb: Tag[];
  };
}
