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
    console.log("getstoryids");
    setStoryIds(storyIds);
  };

  return (
    <div>
      {storyIds.map((storyId) => (
        <StoryItem key={storyId.id} storyId={storyId} />
      ))}
    </div>
  );
}

export default StoryList;
