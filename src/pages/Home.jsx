import TopicCard from "../components/TopicCard";

function Home() {
  const topics = [
    { id: 1, title: "Operators", locked: false },
    { id: 2, title: "Loops", locked: true },
    { id: 3, title: "If Else", locked: true },
    { id: 4, title: "Conditional Operators", locked: true },
  ];

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