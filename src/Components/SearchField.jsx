import "./SearchField.css";

export default function SearchField() {
  return (
    <label className="label">
      What are you looking for?
      <input type="text" placeholder="Search..." />
    </label>
  );
}
