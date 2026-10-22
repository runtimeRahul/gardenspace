
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import VerifyOTPPage from "../pages/VerifyOTPPage";
import MyProfilePage from "../pages/MyProfilePage";

import DashboardLayout from "../components/layout/DashboardLayout";
import GardenDashboard from "../components/home/GardenDashboard";

function PlaceholderPage({ title, description }) {
  return (
    <section className="rounded-3xl border border-[#E5E9DF] bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-[#173F32]">
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#788777]">
        {description}
      </p>

      <p className="mt-5 rounded-xl bg-[#F7F4E9] p-4 text-sm text-[#39764D]">
        This page is connected to the dashboard navigation. We can build
        its full functionality one page at a time.
      </p>
    </section>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />

      {/* Authentication pages */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify-otp" element={<VerifyOTPPage />} />

      {/* Dashboard pages share the same layout */}
      <Route element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={<GardenDashboard />}
        />

        <Route
          path="/my-profile"
          element={<MyProfilePage />}
        />

        <Route
          path="/my-plants"
          element={
            <PlaceholderPage
              title="My Plants"
              description="View and manage your personal plant collection."
            />
          }
        />

        <Route
          path="/care-schedule"
          element={
            <PlaceholderPage
              title="Care Schedule"
              description="Organize watering, pruning, feeding, and other plant-care tasks."
            />
          }
        />

        <Route
          path="/garden-journal"
          element={
            <PlaceholderPage
              title="Garden Journal"
              description="Record your gardening progress, observations, and milestones."
            />
          }
        />

        <Route
          path="/discover"
          element={
            <PlaceholderPage
              title="Discover"
              description="Explore plants, gardening ideas, and inspiration."
            />
          }
        />

        <Route
          path="/settings"
          element={
            <PlaceholderPage
              title="Settings"
              description="Manage your GardenDiaries preferences."
            />
          }
        />

        <Route
          path="/notifications"
          element={
            <PlaceholderPage
              title="Notifications"
              description="View reminders and updates related to your garden."
            />
          }
        />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
