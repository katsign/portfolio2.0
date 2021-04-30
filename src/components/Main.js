import Header from "./Header"
import Portfolio from "./PortfolioContainer"
import Footer from "./Footer"

const Main = () => {
    return (
        <div className="container">
            <div className="row" style={{margin: 'auto'}}>
                <div className="col-xs-12">
                    <Header />
                    <Portfolio />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Main
