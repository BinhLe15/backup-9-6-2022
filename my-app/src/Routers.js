import { Routes, Route } from "react-router-dom";

import LayOut_QLSK from "./components/common/layout/layout1";
import LayOut_QLNTG from "./components/common/layout/layout2";
import LayOut_QLVT from "./components/common/layout/layout3";

function Routers() {
  return (
    <Routes>
        <Route path="/" element={<LayOut_QLSK />} />
        <Route path="QLNTGSK" element={<LayOut_QLNTG />} />
        <Route path="QLVT" element={<LayOut_QLVT />} />
    </Routes>
  );
}
export default Routers;
