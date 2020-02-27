import * as React from "react";

export const Index = () => {
    React.useEffect(() => {
        // window is accessible here.
        console.log("window.innerHeight", window.innerHeight);
    });

    return (
        <div>
            <p>Hej</p>
        </div>
    );
};
