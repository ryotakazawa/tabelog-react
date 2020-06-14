import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopPage() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
       'http://hn.algolia.com/api/v1/search?query=redux',
     );

     setData(result.data);
   };

    fetchData();
  }, []);

  return (
    /*<>
      <p>{data.total_hit_count}</p>
    </>*/
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default TopPage;