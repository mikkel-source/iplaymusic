import {Component} from "react"

export default class ErrorBoundary extends Component {
    // det svarer til at vi har en function ErrorBoundary(props)
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {hasError : true};
        // her ændrer vi på vores state, da getDerivedSteteFromError retunererer et state
    }
    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)

    }
    // hvad skal renderes, children af errorboundry. hvis fejl er true bliver dette returneret på vores sider - custom follback ui
    render() {
        if (this.state.hasError) {
            return (
                <>
                <h1>ups, something went wrong</h1>
                <p>please try again later:D we value your patience</p>
                </>
            )
        }
        return this.props.children;
        }
        // hvis ikke skal vi bare returnerer errorboundry.children
    }
    // vi vil stadig se vores fejl fordi vi er på developer miljøet af vores applicationCache. for at komme på production lav en npm run bulit - gå ind i bulit mappen og go live