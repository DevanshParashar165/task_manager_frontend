import useDarkMode from "../hooks/useDarkMode";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useDarkMode();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    await api.post("/user/logout");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="flex justify-between px-6 py-4 bg-slate-900 dark:bg-slate-800 text-white">
      <h1 className="font-bold">TaskManager</h1>
      <div className="flex gap-4 items-center">
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
