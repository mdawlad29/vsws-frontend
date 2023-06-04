import React from "react";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader />
      {children}
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
