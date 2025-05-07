export const CategoryFilter = ({
  categories,
  onChange,
}: {
  categories: string[];
  onChange: (category: string) => void;
}) => (
  <select
    onChange={(e) => onChange(e.target.value)}
    className=" p-2 rounded mb-4 bg-white outline-0"
    style={{
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    }}
  >
    {categories.map((c) => (
      <option key={c} value={c}>
        {c}
      </option>
    ))}
  </select>
);
