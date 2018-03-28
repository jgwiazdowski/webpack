class IndecitionApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)

    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if (options) { this.setState(() => ({ options })) }
        } catch (e) {
 
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handlePick() {
        const number = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[number])
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== optionToRemove;
            })
        }))
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {
                props.subTitle && <h2>{props.subTitle}</h2>
            }
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all option</button>
            { props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
                )
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)

        this.state = {
            error: undefined
        }
    }
    onFormSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.newOption.value.trim();
        const error = this.props.handleAddOption(option)

        // this.setState(() => {
        //     return { error }
        // })

        this.setState(() => ({ error }))

        if(!error){
            e.target.elements.newOption.value = '';
        }

    }
    render() {
        return (
            <div>
                {
                    this.state.error && <p>{this.state.error}</p>
                }

                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="newOption" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecitionApp />, document.getElementById('app'))