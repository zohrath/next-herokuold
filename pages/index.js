import { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        console.log(window.location.href);
    });

    return (
        <div>
            <p>Hej</p>
        </div>
    );
};
export default Index;
