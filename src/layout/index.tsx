import { Fragment } from "react"
import Footer from "./Dashboard/Footer"
import Header from "./Dashboard/Header"

const DashboardLayout = (props: { children: JSX.Element }) => {
    const { children } = props
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}

export default DashboardLayout