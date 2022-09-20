import React, { useEffect, useState } from "react";
import IStory from "../models/story";
import hackerNewsApiService from "../services/hackerNewsApi";
import StoryItem from "./Story";
import styles from "./Stories.module.scss";

function Stories(): JSX.Element {
  const [stories, setStories] = useState<IStory[]>([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const stories = await hackerNewsApiService.getStories();
    setStories(stories);
  };

  return (
    <div className={styles.stories}>
      {stories.map((story) => (
        <StoryItem key={story.id} story={story} />
      ))}
    </div>
  );
}

export default Stories;
