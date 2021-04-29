import Portfolio from "./PortfolioContainer"
import Footer from "./Footer"

const Main = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <Portfolio />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Main
