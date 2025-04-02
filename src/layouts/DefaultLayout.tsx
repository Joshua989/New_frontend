import { Outlet } from "react-router-dom";
import Nav from "./Nav";
const DefaultLayout = () => {
  return (
    <>
      <header>
        {/* Header content */}
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>

      
      
    </>
  );
};

export default DefaultLayout;
