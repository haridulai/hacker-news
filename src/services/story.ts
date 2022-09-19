import axios from "axios";
import Story from "../models/story";
import TopStories from "../models/topStories";

class storyService {
  http = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/",
  });

  async getTop10Stories() {
    const response = await this.http.get<TopStories[]>("/topstories.json");
    let data = response.data,
      top10Stories: TopStories[] = [],
      currentIndex: number = data.length,
      randomIndex: number;

    if (!currentIndex) throw new Error("Unable to retrieve data");

    for (let i = 0; i < 10; i++) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      top10Stories.push(data[randomIndex]);
    }

    return top10Stories;
  }
}

export default new storyService();
