import IStory from "../models/story";
import Author from "./Author";

interface StoryProps {
  story: IStory;
}

function Story({ story }: StoryProps): JSX.Element {
  return (
    <div>
      <p>SCORE: {story.score}</p>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      <p>By: {story.by}</p>
      <p>Created at: {story.time}</p>
      <Author authorId={story.by} />
    </div>
  );
}

export default Story;
