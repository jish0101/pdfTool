import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/index";
import {
  Home,
  Login,
  SignUp,
  CompressPdf,
  MergePdf,
  ConvertPdf,
  PdfTools,
  ProSubscription
} from "./pages/index";
import { setMode } from "./state";

function App() {
  const mode = useSelector((state) => state.globalReducer.mode);
  const dispatch = useDispatch();

  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/compress-pdf" element={<CompressPdf />} />
          <Route path="/convert-pdf" element={<ConvertPdf />} />
          <Route path="/merge-Pdf" element={<MergePdf />} />
          <Route path="/pdf-tools" element={<PdfTools />} />
          <Route path="/pro-subscription" element={<ProSubscription />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
