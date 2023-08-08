import NavigationAdmin from "../components/NavigationAdmin";
import EditKamar from "./EditKamar";
import { useLocation } from "react-router-dom";

import "../styles/style.css";

const AdminEditKamar = () => {
  const location = useLocation();
  const { kamar_id } = location.state;

  return (
    <div className="d-flex bg">
      <div>
        <NavigationAdmin />
      </div>
      <div>
        <EditKamar kamar_id={kamar_id} />
      </div>
    </div>
  );
};

export default AdminEditKamar;