import { Navigate, replace } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
export default function Admin() {
    const{admin} = useAuthContext();

    if(!admin){
        return(
            <Navigate to="/login" replace/>
        )
    }
    return(
        <div>
            <p>Componente Admin</p>
        </div>
    )
}