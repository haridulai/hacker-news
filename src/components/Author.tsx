import React, { useEffect, useState } from "react";
import IAuthor from "../models/author";
import hackerNewsApiService from "../services/hackerNewsApi";

interface AuthorProps {
  authorId: string;
}
function Author({ authorId }: AuthorProps): JSX.Element {
  const [author, setAuthor] = useState<IAuthor | null>(null);

  useEffect(() => {
    getAuthor();
  }, []);

  const getAuthor = async () => {
    if (authorId) {
      const author = await hackerNewsApiService.getAuthor(authorId);
      setAuthor(author);
    }
  };

  return (
    <div>
      <p> {author?.id}</p>
      <p>Karma score: {author?.karma}</p>
    </div>
  );
}

export default Author;
