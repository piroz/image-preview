import React, {Component} from "react";
import DirectoryEntry from "./directoryentry";
import {Icon} from "react-fa";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
    }

    /**
     * render
     * 
     * @returns 
     * 
     * @memberof Directory
     */
    render() {

        let component = this.state.isOpen ? this.props.directory.entry.map((file, index) =>
                    <DirectoryEntry key={index}  filename={file} directory={this.props.directory.dir} preview={this.props.preview}/>
                ) : "";

        return (
            <div className="directory">
                <h1 className="directory-name" onClick={this.toggleDirectory}>{this.state.isOpen ? <Icon name="folder-open-o" /> : <Icon name="folder-o" /> }{this.props.directory.dir}</h1>
                <div className="directory-entries" style={this.state.isOpen ? {display: "block"} : {display: "none"}}>
                <ReactCSSTransitionGroup
                    transitionName = "fade"
                    transitionAppear = {true}
                    transitionEnter = {true}
                    transitionLeave = {false}
                    transitionAppearTimeout = {500}
                    transitionEnterTimeout = {500}>
                    {component}
                </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}