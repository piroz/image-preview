import React, {Component} from "react";
import Directory from "./directory";
import Preview from "./preview";

/**
 * DirectoryList
 * 
 * @export
 * @class DirectoryList
 * @extends {Component}
 */
export default class DirectoryList extends Component {

    /**
     * Creates an instance of DirectoryList.
     * @param {any} prop 
     * 
     * @memberof DirectoryList
     */
    constructor(prop) {
        super(prop);

        this.state = {
            results: []
        };
        
        fetch(this.props.apiurl)
            .then((response) => {
                response.json().then((json) => {
                    this.setState({
                        results: json
                    });
                });
            });
    }

    /**
     * componentDidUpdate
     * 
     * @param {any} prevProps 
     * @param {any} prevState 
     * 
     * @memberof DirectoryList
     */
    componentDidUpdate(prevProps, prevState) {
        this.preview.setLists(this.state.results);
    }

    /**
     * render
     * 
     * @returns 
     * 
     * @memberof DirectoryList
     */
    render() {
        return (
            <div>
            <div className="directory-list">
            {this.state.results.map((directory, index) =>
                <Directory key={index} directory={directory} open={index === 0} preview={this.preview} />
            )}
            </div>
                <Preview ref={(preview) => { this.preview = preview; }}/>
            </div>
        );
    }
}