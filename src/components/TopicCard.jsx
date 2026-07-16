function TopicCard({ title, completed, onClick }) {
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