import React, { useEffect, useState } from "react";
import StoryId from "../models/storyId";
import Story from "../models/story";
import hackerNewsApiService from "../services/hackNewsApi";

interface StoryProps {
  storyId: StoryId;
}

function StoryItem({ storyId }: StoryProps): JSX.Element {
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    getStory();
  });

  const getStory = async () => {
    const story = await hackerNewsApiService.getStory(storyId);
    // console.log(story);
    setStory(story);
  };
  return (
    <div>
      Story {JSON.stringify(storyId)} {story?.title}
    </div>
  );
}

export default StoryItem;
