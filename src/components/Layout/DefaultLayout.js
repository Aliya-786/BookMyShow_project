import Footer from "../Footer";
// component
import Navbar from "../Navbar/Navbar";

const DefaultlayoutHoc =
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

export default DefaultlayoutHoc;
