import Footer from "../Footer";

// component
import Navbar from "../Navbar/MovieNavbar";

const MovielayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <Footer />
      </div>
    );
  };

export default MovielayoutHoc;
