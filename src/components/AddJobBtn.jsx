import React from "react";

const AddJobBtn = ({title}) => {

    let display = title ?? "+";

    return (
        <button className="border-2 border-slate-500 rounded-md px-3 py-2 my-2 hover:text-white hover:bg-slate-500 transition-all ease-out duration-100">{display}</button>
    );
}

export default AddJobBtn;