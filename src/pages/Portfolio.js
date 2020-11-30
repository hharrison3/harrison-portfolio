import React from 'react';
import "../style/portfolio.css";

const styles = {
    card: {
        width: "16rem"
    }
}
export const Portfolio = () => {
    return (
        <div className="container main">
            <div className="main-box col-xs-12 col-md-10 col-lg-6">
                <h1 className="justify-content-start">Portfolio</h1>
                <hr />
                <div className="row cards">
                    <div className="card" style={styles.card}>
                        <img src="https://images.assetsdelivery.com/compings_v2/serhiibrovko/serhiibrovko1707/serhiibrovko170700062.jpg" className="card-img-top" alt="Movie" />
                        <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">This mobile first application is a one stop shop to find out everything
                            you need to know about your favorite actor.
              </p>
                            <ul>
                                <li>
                                    <a href="https://sean-marten.github.io/project-1/index.html" target="_blank" rel="noreferrer">Link to Project</a>
                                </li>
                                <li>
                                    <a href="https://github.com/sean-marten/project-1" target="_blank" rel="noreferrer">Link to Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card" style={styles.card}>
                        <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/74/1f/a4/741fa4aa-5440-0710-6c6f-a2c03871c30b/AppIcon-0-0-1x_U007emarketing-0-0-0-3-0-0-85-220.jpeg/246x0w.jpg" className="card-img-top" alt="Weather" />
                        <div className="card-body">
                            <h5 className="card-title">Project 2</h5>
                            <p className="card-text">A Weather Dashboard that gives both the current weather and a 5 day forecast
                            for any city you would like.
              </p>
                            <ul>
                                <li>
                                    <a href=" https://hharrison3.github.io/Weather-Dashboard/02-Homework/index.html" target="_blank">Link to project</a>
                                </li>
                                <li>
                                    <a href="https://github.com/hharrison3/Weather-Dashboard" target="_blank" rel="noreferrer">Link to Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row cards">
                    <div className="card" style={styles.card}>
                        <img src="https://www.landmarkschool.org/sites/default/files/calendar%20sidebar.jpg" className="card-img-top" alt="Calendar" />
                        <div className="card-body">
                            <h5 className="card-title">Project 3</h5>
                            <p className="card-text">A day planner to keep track of all your daily activities and responsibilities.
                            Resets each work day.
              </p>
                            <ul>
                                <li>
                                    <a href=" https://hharrison3.github.io/Day-Planner/02-Homework/Develop/index.html" target="_blank">Link to project</a>
                                </li>
                                <li>
                                    <a href="https://github.com/hharrison3/Day-Planner" target="_blank" rel="noreferrer">Link to Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card" style={styles.card}>
                        <img src="https://intermountainhealthcare.org/-/media/coronavirus-covid-19.jpg?mw=1600" className="card-img-top" alt="Password" />
                        <div className="card-body">
                            <h5 className="card-title">Project 4</h5>
                            <p className="card-text">Covid tracer application with ways to track users covid status, other users
                            status, and access to test sites.
              </p>
                            <ul>
                                <li>
                                    <a href="https://github.com/hharrison3/Project-2" target="_blank" rel="noreferrer">Deployment in process</a>
                                </li>
                                <li>
                                    <a href="https://github.com/hharrison3/Project-2" target="_blank" rel="noreferrer">Link to Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
