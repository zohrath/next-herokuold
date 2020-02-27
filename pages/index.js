import { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        console.log(window.location.href);
    });

    return (
        <div>
            <p>{window.location}</p>
        </div>
    );
};
export default Index;
