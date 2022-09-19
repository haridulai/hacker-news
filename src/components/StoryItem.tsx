import Story from "../models/story";
import StoryMetaData from "./StoryMetaData";

interface StoryProps {
  storyItem: Story;
}

function StoryItem({ storyItem }: StoryProps): JSX.Element {
  return (
    <div>
      <p>SCORE: {storyItem.score}</p>
      <a href={storyItem.url}>
        <p>{storyItem.title}</p>
      </a>
      <p>By: {storyItem.by}</p>
      <p>Created at: {storyItem.time}</p>
      <StoryMetaData authorId={storyItem.by} time={storyItem.time} />
    </div>
  );
}

export default StoryItem;
