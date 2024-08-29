const fetchData = async (pageOrId: number, isDetail = false) => {
  const url = isDetail
    ? `https://jsonplaceholder.typicode.com/posts/${pageOrId}`
    : `https://jsonplaceholder.typicode.com/posts?_page=${pageOrId}&_limit=12`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default fetchData;
