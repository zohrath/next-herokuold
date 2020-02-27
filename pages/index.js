import { useEffect } from "react";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null
        };
    }

    componentDidMount() {
        this.setState({ location: window.location });
    }

    render() {
        return <h1>{this.state.location ? this.state.location : "skit"}</h1>;
    }
}
export default Welcome;
