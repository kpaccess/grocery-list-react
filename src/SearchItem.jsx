const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="searchForm"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="search">Search</label>
      <input
        type="search"
        role="searchbox"
        placeholder="Search Items"
        id="search"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </form>
  );
};

export default SearchItem;
