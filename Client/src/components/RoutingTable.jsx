import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import App from '../App'
import About from './RouteingTable/About/About'
import Contact from './RouteingTable/Contact/Contact'
import Gallery from './RouteingTable/Gallery/Gallery'
import Home from './RouteingTable/Home/Home'
import CallForContriBution from '../components/RouteingTable/Authors/CallForContribution';
import PresentationInstructions from '../components/RouteingTable/Authors/PresentationInstructions';
import PaperPresentation from './RouteingTable/Programs/PaperPresentation'
import Submission from '../components/RouteingTable/Authors/Submission';
import PosterPresentation from './RouteingTable/Programs/PosterPresentation'
import Dates from './RouteingTable/Authors/Dates'
import Keynotes from './RouteingTable/Programs/Keynotes'
import Schedule from './RouteingTable/Programs/Schedule'

import Register from './RouteingTable/Programs/Register';
import Org_Committee from './RouteingTable/Organisation/Org_committee'
import Adv_Committee from './RouteingTable/Organisation/Advisory_committee'


export default class RoutingTable extends Component {
    render() {
        return (
            <div>

                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/call-for-contribution">
                        <CallForContriBution />
                    </Route>
                    <Route path="/Presentation-Instructions">
                        <PresentationInstructions />
                    </Route>
                    <Route path="/Paper-Submission">
                        <Submission />
                    </Route>
                    <Route path="/Important-Dates">
                        <Dates />
                    </Route>
                    <Route path="/Keynotes">
                        <Keynotes />
                    </Route>
                    <Route path="/Paper-Presentation">
                        <PaperPresentation />
                    </Route>
                    <Route path="/Poster-Presentation">
                        <PosterPresentation />
                    </Route>
                    <Route path="/Org_committee">
                        <Org_Committee />
                    </Route>
                    <Route path="/Adv_committee">
                        <Adv_Committee/>
                    </Route>

                    <Route path="/Schedule">
                        <Schedule />
                    </Route>
                    <Route path="/Register">
                        <Register />
                    </Route>



                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        )
    }
}
