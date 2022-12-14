import IStory from "../models/story";
import Author from "./Author";
import mapTime from "../services/mapTime";
import styles from "./Story.module.scss";

interface StoryProps {
  story: IStory;
}

function Story({ story }: StoryProps): JSX.Element {
  return (
    <div className={styles.story}>
      <img
        src={process.env.PUBLIC_URL + "/placeholder.jpg"}
        alt={story.title}
      />
      <div className={styles.story__info}>
        <div className={styles.story__header}>
          <h2>
            <a href={story.url} target="_blank">
              {story.title}
            </a>
          </h2>
          <p>
            <a href={story.url} target="_blank">
              {story.url}
            </a>
          </p>
        </div>
        <Author authorId={story.by} />
        <div className={styles.story__stats}>
          <p>
            Score: <strong>{story.score}</strong>
          </p>
          <p>Posted {mapTime(story.time)}</p>
        </div>
      </div>
    </div>
  );
}

export default Story;
