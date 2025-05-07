export const SearchInput = ({
  onChange,
}: {
  onChange: (val: string) => void;
}) => (
  <input
    type="text"
    placeholder="Search by name or description..."
    onChange={(e) => onChange(e.target.value)}
    className="shadow-2xl p-2 rounded w-full mb-4 bg-white outline-0 "
    style={{
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    }}
  />
);
