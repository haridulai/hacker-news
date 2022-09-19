import React, { useEffect, useState } from "react";
import Story from "../models/story";
import hackerNewsApiService from "../services/hackNewsApi";
import StoryItem from "./StoryItem";

function StoryList(): JSX.Element {
  const [stories, setStories] = useState<Story[]>([]);

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
        <StoryItem key={story.id} storyItem={story} />
      ))}
    </div>
  );
}

export default StoryList;
