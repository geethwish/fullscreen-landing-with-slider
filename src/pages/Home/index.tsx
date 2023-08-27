import Navbar from "../../components/navbar/Navbar";
import ScrollableContent from "../../components/scrollableContent/ScrollableContent";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="content-body">
        <ScrollableContent />
      </div>
    </>
  );
};

export default index;
