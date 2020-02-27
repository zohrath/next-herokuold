import { useEffect } from "react";

class Welcome extends React.Component {
    componentDidMount() {
        console.log(window.location);
    }

    render() {
        return <h1>Hello, X</h1>;
    }
}
export default Welcome;
