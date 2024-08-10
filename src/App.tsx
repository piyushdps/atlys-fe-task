import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { redirect } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: async () => {
        return redirect("/login");
      },
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/posts",
      element: <PostPage />,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
