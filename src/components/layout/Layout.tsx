import React from "react";

export interface ILayout {
  children: React.ReactNode;
}
import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full ">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full">
        <Navbar />
        {children}
      </div>
    </main>
  );
};
export default Layout;
