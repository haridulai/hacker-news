import IStory from "../models/story";
import Author from "./Author";

interface StoryProps {
  story: IStory;
}

function Story({ story }: StoryProps): JSX.Element {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/placeholder.jpg"}
        alt={story.title}
      />
      <p>SCORE: {story.score}</p>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      <p>Created at: {new Date(story.time).toLocaleString()}</p>
      <Author authorId={story.by} />
    </div>
  );
}

export default Story;
