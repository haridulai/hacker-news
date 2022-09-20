import React, { useEffect, useState } from "react";
import IAuthor from "../models/author";
import hackerNewsApiService from "../services/hackerNewsApi";
import styles from "./Author.module.scss";

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
    <div className={styles.author}>
      <p>
        <i>by {author?.id} </i>
        <strong>({author?.karma})</strong>
      </p>
    </div>
  );
}

export default Author;
