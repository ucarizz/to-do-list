import './error.scss'
const Error = ({ error }) => {
  return (
    <div className="error">
      <h1>{error}</h1>
      <h1>{' You should : npm run db'}</h1>
    </div>
  );
};
export default Error;
