import TopicCard from "../components/TopicCard";

function Home() {
  const topics = [
    { id: 1, title: "Operators", completed: true },
    { id: 2, title: "Loops", completed: false },
    { id: 3, title: "If Else", completed: false },
    { id: 4, title: "Conditional Operators", completed: false },
  ];

  return (
    <>
      <h1>Language : Java</h1>

      <h2>Concepts</h2>

      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          title={topic.title}
          completed={topic.completed}
          onClick={() => console.log(topic.title)}
        />
      ))}
    </>
  );
}

export default Home;