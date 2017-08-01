import React, {Component} from "react";
import {Icon} from "react-fa";

/**
 * DirectoryEntry
 * 
 * @export
 * @class DirectoryEntry
 * @extends {Component}
 */
export default class DirectoryEntry extends Component {

    constructor(prop) {
        super(prop);

        this.state = {
            isPreview: false
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    /**
     * clickHandler
     * 
     * @param {any} ev 
     * 
     * @memberof DirectoryEntry
     */
    clickHandler(ev) {
        this.props.preview.open(this.props.directory, this.props.filename);
    }

    /**
     * render
     * 
     * @returns 
     * 
     * @memberof DirectoryEntry
     */
    render() {
        return (
            <div className="list-group-item" onClick={this.clickHandler}><Icon name="file-image-o" />{this.props.filename}</div>
        );
    }
}