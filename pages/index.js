import { useEffect } from "react";

var x = "";

const Index = () => {
    useEffect(() => {
        x = window.location;
    });

    return (
        <div>
            <p>{x}</p>
        </div>
    );
};
export default Index;
