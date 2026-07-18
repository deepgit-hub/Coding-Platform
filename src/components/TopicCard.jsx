import "../styles/TopicCard.css";

function TopicCard({ title, locked, onClick }) {
  return (
    <button className="topic-card" onClick={onClick}>
      {title}
      {locked ? " 🔒" : " ▶️"}
    </button>
  );
}

export default TopicCard; 