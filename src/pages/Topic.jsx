import { useNavigate, useParams } from "react-router-dom";
import topics from "../data/topics";

function Topic() {
  const navigate = useNavigate();

  const { id } = useParams();

  const topic = topics.find((topic) => topic.id === Number(id));

  return (
    <>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>{topic.title}</h1>

      <h2>English Definition</h2>
      <p>{topic.englishDefinition}</p>

      <h2>Tamil Definition</h2>
      <p>{topic.tamilDefinition}</p>

      <h2>Real World Usage</h2>
      <p>{topic.realWorldUsage}</p>
    </>
  );
}

export default Topic;