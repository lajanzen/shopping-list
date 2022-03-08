import "./SearchField.css";

export default function SearchField({ onChange }) {
  return (
    <label className="label">
      What are you looking for?
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
