function ItemList() {
  const items = ["React", "Node.js", "Express.js"];
  return (
    <div>
      <h2>Technologies:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ItemList;
