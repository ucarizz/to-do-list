import './error.scss'
const Error = ({ error }) => {
  return (
    <div className="error">
      <h1>{error || 'Error !'}</h1>
    </div>
  );
};
export default Error;
