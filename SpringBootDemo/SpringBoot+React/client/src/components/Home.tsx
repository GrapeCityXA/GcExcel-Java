import * as React from 'react';
import {RouteComponentProps} from "react-router";
import { Link, NavLink } from 'react-router-dom';

export class Home extends React.Component<{} & RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>GrapeCity Documents for Excel, Java Edition Demo!</h1>
            <p>Welcome to GrapeCity Documents for Excel, Java Edition demo, you can learn how to program with GcExcel in SpringBoot at server side, and use React + Spread.Sheets at client side:</p>
            <ul>
                <li><a href='https://search.maven.org/artifact/com.grapecity.documents/gcexcel/2.0.0/jar'>GcExcel</a> is a new high performing, low memory server component with full API for server-side spreadsheet generation, manipulation, and serialization to various formats including xlsx and ssjson. GcExcel targets JRE 1.6 and above.</li>
                <li><a href='https://www.grapecity.com/en/spreadjs'>Spread.Sheets</a> is the spreadsheet component of the SpreadJS product family. This enterprise-grade JavaScript spreadsheet displays and manages data much like Microsoft Excel. Popular features include a formula engine, sorting, filtering, input controls, sparklines, and native Excel input/output.</li>
            </ul>
            <p>You will explore some typical seneros about how to use GcExcel together with Spread.Sheets:</p>
            <ul>
                <li>In <Link to={'/ExcelTemplateDemo'}>Excel Template Demo</Link>, you will learn how to open an excel template at server side with GcExcel, then view or fill content for the template through Spread.Sheets at client side.</li>
                <li>In <Link to={'/ProgrammingDemo'}>Programming API Demo</Link>, You will learn how to program with GcExcel all yourself at server side, then view the result through Spread.Sheets at client side.</li>
                <li>In <Link to={'/ExcelIODemo'}>Excel IO Demo</Link>, you will learn how to upload an excel file from client and open the file using GcExcel at server side, then view the result through Spread.Sheets at client side.</li>
            </ul>
            <p>You can find more resources about <strong>GcExcel</strong> at:</p>
            <ul>
                <li><a href='http://demos.componentone.com/gcdocs/gcexceljava/'>Online Demo Site</a></li>
                <li><a href='https://www.grapecity.com/en/documents-api-excel-java'>Product Home Site</a></li>
                <li><a href='https://search.maven.org/artifact/com.grapecity.documents/gcexcel/2.0.0/jar'>GcExcel Maven Site</a></li>
                <li><a href='https://www.grapecity.com/en/spreadjs'>Spread.Sheets Home Site</a></li>
            </ul>
        </div>;
    }
}
