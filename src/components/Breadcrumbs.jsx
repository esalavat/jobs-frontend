import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({links}) => {
    return (
        <div>
            {links.map((link, index) => {
                const last = index == links.length-1;
                return(
                    <>
                        {last
                            ? link.display
                            : <>
                                <Link to={last ? "" : link.path} className="underline hover:no-underline">
                                    {link.display}
                                </Link>
                                <span> &gt; </span>
                            </>
                        } 
                    </>
                );
            })}
        </div>
    );
}

export default Breadcrumbs;