
import { useEffect, useState } from "react";
import AppRoutes from "./routes/Routes";
import LoadingScreen from "./components/common/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen message="Growing your garden..." />;
  }

  return <AppRoutes />;
}
