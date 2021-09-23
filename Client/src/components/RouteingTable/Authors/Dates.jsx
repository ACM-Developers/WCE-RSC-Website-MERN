import React, { Components, useState } from 'react';
import PageBanner from '../PageBanner';
import Date from '../../../JSON/date.json';
import Table from 'react-bootstrap/Table'



function Dates() {
    return (
        <div>
            <PageBanner name="Important Dates" head="Author" subhead="Important Dates" info="Feel Free To Get In Touch" />
            <div id="content">
                <div className="container">
                    <div className="page-content">

                        <div className="col-md-9">
                            <div>   
                                <br/>
                            <h1 className="accent-color">WCE Research Symposium on Computing - RSC 2021</h1><br/>
                            <p><strong>Organized by WCE ACM Student Chapter <br />National  Level Event By Department of Computer Science & Engineering</strong></p>
                            </div> 
                            <h1 className="accent-color">Important Dates</h1>
                            <br/>
                            <Table className="table table-responsive table-condensed table-bordered"><br />
                                <thead>
                                    <th>Sr No</th>
                                    <th>Important Dates</th>
                                    <th>Particulars</th>
                                </thead>
                                <tbody>
                                    {
                                        Date.map(Dates => <tr key={Dates.id}>

                                            <td>{Dates.id} </td>

                                            <td>{Dates.impDate}</td>
                                            <td>{Dates.details}</td>


                                        </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div class="col-md-3 sidebar right-sidebar">

                            <div class="widget widget-categories">
                                <h4>Related Links <span class="head-line"></span></h4>
                                <ul>
                                    

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>

            );
}

            export default Dates;
