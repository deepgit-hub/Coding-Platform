import TopicCard from "../components/TopicCard";
import topics from "../data/topics";

function Home() {
  return (
    <>
      <h1>Language : Java</h1>

      <h2>Concepts</h2>

      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          title={topic.title}
          locked={topic.locked}
          onClick={() => console.log(topic.title)}
        />
      ))}
    </>
  );
}

export default Home;