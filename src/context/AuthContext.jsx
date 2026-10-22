
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "gardendiaries-demo-user";

function readStoredUser() {
  try {
    const storedUser = localStorage.getItem(STORAGE_KEY);

    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // The app can still work for this session if storage is unavailable.
    }
  }, [user]);

  function signIn(userDetails) {
    setUser({
      fullName: userDetails.fullName?.trim() || "Garden Friend",
      email: userDetails.email?.trim() || "",
    });
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
