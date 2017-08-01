import React, {Component} from "react";
import DirectoryEntry from "./directoryentry";
import {Icon} from "react-fa";

/**
 * Directory
 * 
 * @export
 * @class Directory
 * @extends {Component}
 */
export default class Directory extends Component {

    /**
     * Creates an instance of Directory.
     * @param {any} prop 
     * 
     * @memberof Directory
     */
    constructor(prop) {
        super(prop);

        this.state = {
            isOpen: this.props.open
        };

        this.initStyle = this.state.isOpen ? {display: "block"} : {display: "none"};

        this.toggleDirectory = this.toggleDirectory.bind(this);
    }

    /**
     * toggleDirectory click handler
     * 
     * @param {any} ev 
     * 
     * @memberof Directory
     */
    toggleDirectory(ev) {
        this.setState({
            isOpen: !this.state.isOpen
        });
        $(ev.target).next('.list-group').slideToggle();
    }

    /**
     * render
     * 
     * @returns 
     * 
     * @memberof Directory
     */
    render() {

        let component = this.props.directory.entry.map((file, index) =>
                    <DirectoryEntry key={index}  filename={file} directory={this.props.directory.dir} preview={this.props.preview}/>
        );

        return (
            <div className="directory">
                <button onClick={this.toggleDirectory} type="button" className="btn btn-primary btn-lg btn-block">{this.state.isOpen ? <Icon name="folder-open-o" /> : <Icon name="folder-o" /> }{this.props.directory.dir}</button>
                <div className="list-group" style={this.initStyle}>
                {component}
                </div>
            </div>
        );
    }
}