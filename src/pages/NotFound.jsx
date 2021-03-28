import { Link, useParams } from 'react-router-dom';

export function NotFound() {
  const params = useParams().id;

  return (
    <div className="error">
      <h1>Síða "{params}" fannst ekki</h1>
      <Link to="./" className="back">Til Baka</Link>
    </div>
  );
}
