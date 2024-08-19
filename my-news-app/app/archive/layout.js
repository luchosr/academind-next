const ArchiveLayOut = ({ archive, latest }) => {
  return (
    <div>
      <h1>News Archive</h1>
      <article id="archive-filter">{archive}</article>
      <article id="archive-latest">{latest}</article>
    </div>
  );
};

export default ArchiveLayOut;
