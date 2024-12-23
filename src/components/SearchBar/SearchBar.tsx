import { useMemo } from "react";
import debounce from "lodash/debounce";
import styles from "./SearchBar.module.css";

export function SearchBar({
  setSearchTerm,
}: {
  setSearchTerm: (value: string) => void;
}) {
  const handleSearchInputChange = useMemo(
    () =>
      debounce((event) => {
        setSearchTerm(event.target.value);
      }, 500),
    [setSearchTerm]
  );

  return (
    <form onSubmit={(event) => event?.preventDefault()}>
      <input
        className={styles["search"]}
        type="text"
        placeholder="Enter stock ticker (e.g., AAPL)"
        onChange={handleSearchInputChange}
      />
    </form>
  );
}
