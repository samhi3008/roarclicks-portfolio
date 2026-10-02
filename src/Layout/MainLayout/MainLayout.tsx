import Header from "../Header/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* {showFooter && <Footer />} */}
    </>
  );
}
