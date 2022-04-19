import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <Spinner className="my-5" animation="border" variant="warning" />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;