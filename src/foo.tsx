import React from 'react';
import {useNavigate} from "./packages/lite-router/hooks";

function Foo() {

    const navigate = useNavigate()
    return (
        <div>

            <button onClick={() => navigate("/") }>
                Home
            </button>
        </div>
    );
}

export default Foo;
