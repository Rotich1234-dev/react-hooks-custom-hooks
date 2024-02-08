import { useState, useEffect } from "react";

function useQuery(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    fetch("http://localhost:4000/posts")
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoaded(true);
      });
  }, [url]);

  // return an *object* with the data and isLoaded state
  return { data, isLoaded };
}

export default useQuery;