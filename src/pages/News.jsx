import { useParams } from 'react-router-dom';
import { News } from '../components/news/News';
import { NotFound } from './NotFound';

const apiUrl = process.env.REACT_APP_API_URL;
const ID = ['allar', 'innlent', 'erlent', 'menning', 'ithrottir'];

export function NewsPage() {
  const param = useParams().id;
  if (!ID.includes(param)) {
    return (
      <NotFound/>
    );
  } else {
    return (
      <News dat={{"url": apiUrl+param}} newsCount={Infinity} embed={false}/>
    )
  }
}
