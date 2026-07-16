import TopicCard from "../components/TopicCard";

function Home() {
  const topics = [
    { id: 1, title: "Operators", locked: true },
    { id: 2, title: "Loops", locked: false },
    { id: 3, title: "If Else", locked: false },
    { id: 4, title: "Conditional Operators", locked: false }
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