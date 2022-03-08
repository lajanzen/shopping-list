export default function ActiveList({ activeItems }) {
  return (
    <ul>
      {activeItems.map((item) => (
        <li key={item.index}>{item}</li>
      ))}
    </ul>
  );
}
