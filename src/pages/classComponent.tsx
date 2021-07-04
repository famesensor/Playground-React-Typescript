import React from 'react';
import { count } from 'yargs';

interface Props {
    message: string;
    initCount: number;
}

type MyState = {
    count: number;
};

class CountClassComponent extends React.Component<Props, MyState> {
    // state: MyState = {
    //     count: 15
    // };

    state = { count: 0 };

    componentDidMount() {
        this.setState({ count: this.props.initCount });
    }

    increment = (amt: number) => {
        // like this
        this.setState((state) => ({
            count: state.count + amt
        }));
    };

    decrement = (amt: number) => {
        this.setState((state) => ({
            count: state.count - amt
        }));
    };

    reset = () => {
        this.setState({ count: this.props.initCount });
    };

    render() {
        return (
            <div>
                <h2>{this.props.message}</h2>
                <h4>Count: {this.state.count}</h4>
                <button onClick={() => this.increment(1)}>Increment</button>
                <button onClick={() => this.decrement(1)}>Decrement</button>
                <button onClick={() => this.reset()}>Reset</button>
            </div>
        );
    }
}

export default CountClassComponent;
