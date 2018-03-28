class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const number = localStorage.getItem('count');
        const count = parseInt(number, 10);
        // if (number) {
        //     this.setState(() => ({
        //         count: parseInt(number)
        //     }))
        // }
        if (!isNaN(count)) {
            this.setState(() => ({
                count: count
            }))
        }


    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            localStorage.setItem('count', (this.state.count))
        }
    }

    addOne() {
        this.setState((prevState) => {

            return {
                count: prevState.count + 1
            }
        })
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))