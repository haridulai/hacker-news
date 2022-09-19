import axios from "axios";
import Author from "../models/author";
import Story from "../models/story";
import StoryId from "../models/storyId";

class hackerNewsApiService {
  http = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/",
  });

  async getStoryIds() {
    const response = await this.http.get<StoryId[]>("/topstories.json");
    let data = response.data,
      storyIDs: StoryId[] = [],
      currentIndex: number = data.length,
      randomIndex: number;

    if (!currentIndex) throw new Error("Unable to retrieve data");

    for (let i = 0; i < 10; i++) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      storyIDs.push(data[randomIndex]);
    }
    return storyIDs;
  }

  async getStory(storyId: StoryId) {
    const response = await this.http.get<Story>(`/item/${storyId}.json`);
    return response.data;
  }

  async getAuthor(authorId: string) {
    const response = await this.http.get<Author>(`/user/${authorId}.json`);
    return response.data;
  }
}

export default new hackerNewsApiService();
