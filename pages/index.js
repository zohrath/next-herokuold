import { useEffect } from "react";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.location;
    }

    componentDidMount() {
        this.location = window.location;
    }

    render() {
        return <h1>{this.location ? this.location : "skit"}</h1>;
    }
}
export default Welcome;
