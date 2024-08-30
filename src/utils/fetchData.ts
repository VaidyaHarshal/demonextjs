const fetchData = async (pageOrId?: number | string, isDetail = false) => {
  const url = isDetail
    ? `https://jsonplaceholder.typicode.com/posts/${pageOrId}`
    : `https://jsonplaceholder.typicode.com/posts`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default fetchData;
