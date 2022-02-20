import { Navigate } from "react-router-dom";
import Hotel from "../components/Hotel";
import { Hotels } from "../components/Hotels";
import Landing from "../components/Landing";
import Profile from "../components/Profile";
import Registration from "../components/Registration";
import SignIn from "../components/SignIn";

export const useRouter = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return [
      { path: "/", element: <Landing /> },
      { path: "/hotels", element: <Hotels /> },
      // { path: "/hotel", element: <Hotel /> },
      { path: "/profile", element: <Profile /> },
      { path: "*", element: <Navigate to="/" /> },
    ];
  }

  return [
    { path: "/", element: <Landing /> },
    { path: "/hotels", element: <Hotels /> },
    // { path: "/hotel", element: <Hotel /> },
    { path: "/registration", element: <Registration /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <Navigate to="/" /> },
  ];
};
