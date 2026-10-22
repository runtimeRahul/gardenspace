
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#F7F4E9] text-[#173F32]">
      <Sidebar />

      <div className="min-h-screen min-w-0 md:pl-64">
        <Topbar />

        <main className="min-w-0 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
