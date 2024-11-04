const SortRepos = ({ onSort, sortType }) => {
  const renderSortButton = (label, type) => (
    <button
      type="button"
      className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-one rounded-lg bg-glass
        ${sortType === type ? "border-blue-500" : ""}`}
      onClick={() => onSort(type)}
    >
      {label}
    </button>
  );

  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      {renderSortButton("Most Recent", "recent")}
      {renderSortButton("Most Stars", "stars")}
      {renderSortButton("Most Forks", "forks")}
    </div>
  );
};

export default SortRepos;
