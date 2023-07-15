import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Идет загрузка...</p>}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
