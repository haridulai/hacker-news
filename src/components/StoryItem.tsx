import React, { useEffect, useState } from "react";
import StoryId from "../models/storyId";
import Story from "../models/story";
import hackerNewsApiService from "../services/hackNewsApi";
import StoryMetaData from "./StoryMetaData";

interface StoryProps {
  storyId: StoryId;
}

function StoryItem({ storyId }: StoryProps): JSX.Element {
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    getStory();
  }, []);

  const getStory = async () => {
    const story = await hackerNewsApiService.getStory(storyId);
    // console.log(story);
    setStory(story);
  };
  return (
    <div>
      <a href={story?.url}>
        <p>{story?.title}</p>
      </a>
      <p>By: {story?.by}</p>
      <p>Created at: {story?.time}</p>
      <StoryMetaData authorId={story?.by} time={story?.time} />
    </div>
  );
}

export default StoryItem;
