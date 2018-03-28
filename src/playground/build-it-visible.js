class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)        
    }

    handleToggleVisibility() {       
        this.setState( (prevState) => {
            console.log(prevState);
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    { this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {
                    this.state.visibility && (
                        <p>Secret!</p>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// let visibility = fasle;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
//     console.log(visibility);
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggleVisibility}>
//                 { visibility ? 'Hide defails' : 'Show details'}
//             </button>
//             {
//                 visibility && (
//                     <div>
//                         <p>SECRET!</p>
//                     </div>
//                 )
//             }
//         </div>
//     )

//     ReactDOM.render(jsx, document.getElementById('app'));

// }

// render();