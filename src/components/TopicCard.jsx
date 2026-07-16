function TopicCard({ title, locked, onClick }) {
  return (
    <button
      className={`topic-card ${completed ? "completed" : ""}`}
      onClick={onClick}
    >
      {title}

      {completed ? " ✅" : " 🔒"}
    </button>
  );
}

export default TopicCard;