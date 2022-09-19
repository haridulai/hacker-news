import React, { useEffect, useState } from "react";
import StoryId from "../models/storyId";
import hackerNewsApiService from "../services/hackNewsApi";
import StoryItem from "./StoryItem";

function StoryList(): JSX.Element {
  const [storyIds, setStoryIds] = useState<StoryId[]>([]);

  useEffect(() => {
    getStoryIds();
  }, []);

  const getStoryIds = async () => {
    const storyIds = await hackerNewsApiService.getStoryIds();
    setStoryIds(storyIds);
  };

  return (
    <>
      {storyIds.map((storyId) => (
        <StoryItem storyId={storyId} />
      ))}
    </>
  );
}

export default StoryList;
