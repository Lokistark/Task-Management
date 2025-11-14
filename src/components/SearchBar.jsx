function SearchBar({ filter, setFilter }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={filter}
      onChange={e => setFilter(e.target.value)}
    />
  );
}
