import Header from '../components/Header';

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="container">{children}</div>
        <h1>Hêllo</h1>
      </div>
    </div>
  );
}

export default DefaultLayout;
