import './ErrorBoundary.css';
import React,{Component} from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        console.log(error);
        this.setState({ hasError: true });


    }

    render() {
        if (this.state.hasError) {
            return <h1>please enter the correct expression.</h1>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;