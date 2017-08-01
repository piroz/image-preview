import React, {Component} from "react";
import "./preview.scss";

/**
 * Preview
 * 
 * @export
 * @class Preview
 * @extends {Component}
 */
export default class Preview extends Component {

    /**
     * Creates an instance of Preview.
     * @param {any} prop 
     * 
     * @memberof Preview
     */
    constructor(prop) {

        super(prop);

        this.state = {
            isOpen: false, 
            directory: "",
            filename: "",
            lists: [],
            imgClassName: "",
            showLoader: false
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.close = this.close.bind(this);
        this.imgOnLoad = this.imgOnLoad.bind(this);
    }

    /**
     * setLists
     * 
     * @param {any} lists 
     * 
     * @memberof Preview
     */
    setLists(lists) {
        this.setState({
            lists: lists
        });
    }

    /**
     * open
     * 
     * @param {any} directory 
     * @param {any} filename 
     * 
     * @memberof Preview
     */
    open(directory, filename) {

        this.setState({
            isOpen: true,
            directory: directory,
            filename: filename
        });
    }

    /**
     * close
     * 
     * @memberof Preview
     */
    close(ev) {
        if (ev) {
            ev.preventDefault();
        }

        this.setState({
            isOpen: false,
            showLoader: false,
            directory: "",
            filename: ""
        });
    }

    /**
     * clickHandler
     * 
     * @param {any} ev 
     * 
     * @memberof Preview
     */
    clickHandler(ev) {

        const currentOpendDirectory = this.state.lists.find((elm) => {
            return elm.dir == this.state.directory;
        });

        const currentIndex = currentOpendDirectory.entry.indexOf(this.state.filename);

        if (currentOpendDirectory.entry.length <= currentIndex + 1) {
            this.close();
            return;
        }

        this.setState({
            imgClassName: "disappear",
            showLoader: true,
            filename: currentOpendDirectory.entry[currentIndex + 1]
        });
    }

    imgOnLoad(ev) {
        this.setState({
            showLoader: false,
            imgClassName: "appear"
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
        return (
            <div className="previewWrap">
                <div className="loader" style={this.state.showLoader ? {display: "block"} : {display: "none"}}>Loading...</div>
                <div className="preview" style={this.state.isOpen ? {display: "block"} : {display: "none"}}>
                    
                    <a className="closeBox" onClick={this.close}>×</a>
                    {this.state.isOpen ? <img onClick={this.clickHandler} className={this.state.imgClassName} onLoad={this.imgOnLoad} src={this.state.directory + "/" + this.state.filename}/> : null}
                </div>
            </div>
        );
    }
}