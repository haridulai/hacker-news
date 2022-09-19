import Author from "./author";

export default interface Story {
  title: string;
  url: string;
  story: Date;
  score: number;
  author: Author;
}
