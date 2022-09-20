import React, { useEffect, useState } from "react";
import IStory from "../models/story";
import hackerNewsApiService from "../services/hackNewsApi";
import StoryItem from "./Story";

function StoryList(): JSX.Element {
  const [stories, setStories] = useState<IStory[]>([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const stories = await hackerNewsApiService.getStories();
    setStories(stories);
  };

  return (
    <div>
      {stories.map((story) => (
        <StoryItem key={story.id} story={story} />
      ))}
    </div>
  );
}

export default StoryList;
