import { useEffect } from "react";

var x = "";

const Index = () => {
    useEffect(() => {
        x = window.location;
    });

    return (
        <div>
            <p>Hej</p>
        </div>
    );
};
export default Index;
