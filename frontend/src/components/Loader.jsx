import { Spinner } from "react-bootstrap";

const Loader = () => {
  <Spinner
    animation="border"
    role="status"
    style={{
      width: "50px",
      height: "50px",
      display: "block",
      margin: "auto",
    }}
  ></Spinner>;
};

export default Loader;
