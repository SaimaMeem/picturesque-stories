import React from 'react';
import { Link, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    // let resolved = useResolvedPath(to);
    // let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                //   style={
                //       { color: match ? "red" : "green",
                //       borderBottom: match && "3px solid blue"
                //       } 

                //       }
                to={to}
                {...props}
            >
                {children}
            </Link>
            {/* {match && " (active)"} */}
        </div>
    );
};

export default CustomLink;