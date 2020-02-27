import { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        console.log("window.innerHeight", window.innerHeight);
    });

    return (
        <div>
            <p>{window.location}</p>
        </div>
    );
};
export default Index;
