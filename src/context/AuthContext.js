import { createContext } from "react";
import Cookies from "js-cookie";

const token = Cookies.get("token")

const AuthContext = createContext(token);

export default AuthContext;