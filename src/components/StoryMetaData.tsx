import React, { useEffect, useState } from "react";
import Author from "../models/author";
import hackerNewsApiService from "../services/hackNewsApi";

interface StoryMetaDataProps {
  authorId?: string;
  time?: number;
}
function StoryMetaData({ authorId, time }: StoryMetaDataProps): JSX.Element {
  const [author, setAuthor] = useState<Author | null>(null);

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
      <p>{time}</p>
      <p> {author?.id}</p>
      <p>Karma score: {author?.karma}</p>
    </div>
  );
}

export default StoryMetaData;
