import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function News({ dat, newsCount, embed }) {
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    async function callAPI() {
      try {
        const data = await ( await fetch(dat.url) ).json();
        setData(data);
        setLoading(false);
      } catch (err) {
        console.error(`Villa við að sækja gögn úr ${dat.url}`);
        setError(err);
      }
    } callAPI();
  }, [dat.url]);
  
  return (
    
    <div className={embed ? "news_items" : "news_items_embed"}>
      { (loading) ? ( <p>Hleð gögn</p> ) : ( !error && data ) ? (
        <div>
          { !embed &&
            <h2>{ data.title }</h2>
          }
          <div className="news_item">
            { data.items.map((data, x) => {
              if (x < newsCount) {
                return (
                  <a key={x} href={data.link}><p>{data.title}</p></a>
                );
              } else {
                return null;
              }
            })}
            { embed
              ? <Link to={dat.id} className="news_all">Allar Fréttir</Link>
              : <Link to="./" className="back">Til Baka</Link>
            }
          </div>
        </div>
      ) : ( <p>Villa kom upp við að sækja gögn</p> ) }
    </div>
  );
}
