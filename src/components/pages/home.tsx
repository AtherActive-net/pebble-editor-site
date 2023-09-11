import PageLayout from "@core/components/pageLayout/pageLayout";
import classes from "@core/components/pages/home.module.scss"
import Logo from "../logo/logo";
import Nav from "../nav/nav";

export default function HomePage() {
    const siteOptions = [
        "info page",
        "webshop",
        "portfolio",
        "blog"
    ]

    return (
        <PageLayout extraClass={classes.root}>
            <Nav extraClass={classes.nav}/>
            <div className={classes.titleSection}>
                <div className={classes.titleLeft}>
                    <h1 className={classes.title}>
                        <span className={classes.title1}>Enhance your {" "}
                            <div className={classes.siteType}>
                                {siteOptions.map((option, index) => (
                                    <div key={index} className={classes.siteOption}>{option}</div>
                                )
                                )}
                            </div>
                        </span>
                        <span className={classes.title2}>with <Logo/></span>
                    </h1>
                    <span className={classes.description}>Pebble is not your typical page builder. Reduce load from your developers (or yourself!) by integrating Pebble in your project.</span>
                </div>

                <div className={classes.titleRight}></div>
            </div>
        </PageLayout>
    )
}