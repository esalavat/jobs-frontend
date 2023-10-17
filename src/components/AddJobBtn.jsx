import React from "react";
import { useNavigate } from "react-router-dom";

const AddJobBtn = ({title}) => {

    let display = title ?? "+";

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        navigate("/jobs/new");
    }

    return (
        <button onClick={handleClick} className="border-2 border-slate-500 rounded-md px-3 py-1 my-2 hover:text-white hover:bg-slate-500 transition-all ease-out duration-100">{display}</button>
    );
}

export default AddJobBtn;