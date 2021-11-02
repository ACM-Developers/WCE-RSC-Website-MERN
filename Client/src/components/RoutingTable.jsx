import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import App from '../App'
import About from './RouteingTable/About/About'
import Contact from './RouteingTable/Contact/Contact'
import Gallery from './RouteingTable/Gallery/Gallery'
import Home from './RouteingTable/Home/Home'
import CallForContriBution from '../components/RouteingTable/Authors/CallForContribution';
import PaperPresentation from './RouteingTable/Programs/PaperPresentation'
import Submission from '../components/RouteingTable/Authors/Submission';
import PosterPresentation from './RouteingTable/Programs/PosterPresentation'
import Dates from './RouteingTable/Authors/Dates'
import Keynotes from './RouteingTable/Programs/Keynotes'
import Schedule from './RouteingTable/Programs/Schedule'
import IPS from './RouteingTable/Programs/IPS';
import Register from './RouteingTable/Programs/Register';
import Org_Committee from './RouteingTable/Organisation/Org_committee'
import Adv_Committee from './RouteingTable/Organisation/Advisory_committee'
import Venue from './RouteingTable/Local/Venue'
import Location from './RouteingTable/Local/Location'
import Accessing from './RouteingTable/Local/Accessing'
import Guidlines from './RouteingTable/Authors/Guidlines'
import Login from './RouteingTable/Admin/Login'
import CallFor from './RouteingTable/Admin/Editor/Author/CallFor'
import EHome from './RouteingTable/Admin/Editor/Home/EHome'
import Ekeynotes from './RouteingTable/Admin/Editor/Keynotes/Ekeynotes'
import EAdvCom from './RouteingTable/Admin/Editor/Committe/EAdvCom'
import AdminPanel from './RouteingTable/Admin/Editor/AdminPanel'
import EOrgCom from './RouteingTable/Admin/Editor/Committe/EOrgCom'
import EAbout from './RouteingTable/Admin/Editor/EAbout'
import EGuidlines from './RouteingTable/Admin/Editor/Author/EGuidlines'

export default class RoutingTable extends Component {
    render() {
        return (
            <div>

                <Switch>

                    {/* Home - start*/}
                        <Route exact path="/">
                            <Home />
                        </Route>
                    {/* Home - end*/}


                    {/* Authors - start*/}
                        <Route exact path="/authors/call-for-contribution">
                            <CallForContriBution />
                        </Route>
                        <Route exact path="/authors/Guidlines">
                            <Guidlines/>
                        </Route>
                        <Route exact path="/authors/Paper-Submission">
                            <Submission />
                        </Route>
                        <Route exact path="/authors/Important-Dates">
                            <Dates />
                        </Route>
                    {/* Authors - end*/}


                    {/* Programs - start*/}
                        <Route exact path="/programs/Keynotes">
                            <Keynotes />
                        </Route>
                        <Route exact path="/programs/Paper-Presentation">
                            <PaperPresentation />
                        </Route>
                        <Route exact path="/programs/Poster-Presentation">
                            <PosterPresentation />
                        </Route>
                        <Route exact path="/programs/IPS">
                            <IPS/>
                        </Route>
                        <Route exact path="/programs/Schedule">
                            <Schedule />
                        </Route>
                        <Route exact path="/programs/Register">
                            <Register />
                        </Route>
                    {/* Programs - end*/}


                    {/* Organisation - start*/}
                        <Route exact path="/organisation/Org_committee">
                            <Org_Committee />
                        </Route>
                        <Route exact path="/organisation/Adv_committee">
                            <Adv_Committee/>
                        </Route>
                    {/* Organisation - end*/}


                    {/* Local Info - start*/}
                        <Route exact path="/localInfo/venue">
                            <Venue/>
                        </Route>
                        <Route exact path="/localInfo/location">
                            <Location/>
                        </Route>    
                        <Route exact path="/localInfo/accessing">
                            <Accessing/>
                        </Route>
                    {/* Local Info - end*/}


                    {/* Gallery - start*/}
                        <Route exact path="/gallery">
                            <Gallery />
                        </Route>
                    {/* Gallery - end*/}


                    {/* About - start*/}
                        <Route exact path="/about">
                            <About />
                        </Route>
                    {/* About - end*/}


                    {/* Contact - start*/}
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    {/* Contact - end*/}


                    {/* Admin - start*/}
                        <Route exact path="/Admin">
                            <Login/>
                        </Route>
                    {/* Admin - end*/}
                    <Route exact path="/Test">
                            <EGuidlines/>
                        </Route>

                    {/* Tmp AdminPanel - start*/}
                        <Route exact path="/AdminPanel">
                            <AdminPanel/>
                        </Route>
                    {/* tmp AdminPanel - end*/}


                    {/* Random Route - start*/}
                        <Route path="*">
                            <Home />
                        </Route>
                    {/* Random Route - end*/}
                     
                </Switch>
            </div>
        )
    }
}
