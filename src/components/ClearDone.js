import React from "react";
import { useDispatch } from "react-redux";
import { clearDone } from "../redux/tasksSlice";
import {AiOutlineClear} from "react-icons/ai";

function ClearDone() {
    let dispatch = useDispatch();

    return (
        <>
        <AiOutlineClear className="display-button" onClick={() => dispatch(clearDone())}/>
        </>
    );
}

export default ClearDone;
