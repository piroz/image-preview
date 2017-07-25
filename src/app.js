import React, {Component} from "react";
import DirectoryList from "./directorylist";

/**
 * App
 * 
 * @export
 * @class App
 * @extends {Component}
 */
export default class App extends Component {

    render() {
        let apiurl = document.getElementById('app').getAttribute("apiurl");

        return (
            <DirectoryList apiurl={apiurl} />
        );
    }
}