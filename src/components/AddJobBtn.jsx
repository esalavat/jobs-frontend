import React from "react";

const AddJobBtn = ({title}) => {

    let display = title ?? "+";

    return (
        <button className="bg-slate-500 rounded-xl text-white p-3 my-3">{display}</button>
    );
}

export default AddJobBtn;