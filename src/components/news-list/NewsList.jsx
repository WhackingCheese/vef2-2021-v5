import React, { useEffect, useState } from 'react';
import { News } from '../news/News.jsx';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    async function callAPI() {
      try {
        const data = await ( await fetch(apiUrl) ).json();
        setData(data);
        setLoading(false);
      } catch (err) {
        console.error(`Villa við að sækja gögn úr ${apiUrl}`)
        setError(err);
      }
    } callAPI();
  }, []);

  return (
    <div className="news">
      { (loading) ? ( <p>Hleð gögn</p> ) : ( !error && data ) ? (
        <div className="news_container">
          { data.map((data, x) => {
            return (
              <div className="news_category" key={x}>
                <h2>{ data.title }</h2>
                <News dat={data} newsCount={5} embed={true}/>
              </div>
            )})}
        </div>
      ) : ( <p>Villa kom upp við að sækja gögn</p> ) } 
    </div>
  );
}
