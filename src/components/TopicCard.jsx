function TopicCard({ title, locked, onClick }) {
  return (
    <button
      className={`topic-card ${completed ? "completed" : ""}`}
      onClick={onClick}
    >
      {title}

      {locked ? "🔒" : "▶️"}
    </button>
  );
}

export default TopicCard;