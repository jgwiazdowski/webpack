
let visibility = false;

const onButtonClick = () => {
    visibility == false? visibility = true : visibility = false;;
    console.log(visibility)
    render();
}

const render = () => {
    var appRoot = document.getElementById('app');
    const template = (
    <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onButtonClick}>
                { visibility ? 'Hide details' : 'Show details'}
            </button>
            { visibility && (
                <div><p>Hi</p></div>
            ) }
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();


