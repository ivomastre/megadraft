/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import getMuiTheme from "material-ui/styles/getMuiTheme";
import {grey300, grey900, white, indigo500} from "material-ui/styles/colors";

import {MegadraftEditor} from "../../src/Megadraft";
import {editorStateToJSON, editorStateFromRaw} from "../../src/utils";
import {highlightCode} from "./highlightCode";

import INITIAL_CONTENT from "./contentExample";

import relatedArticles from "megadraft-related-articles-plugin";
import image from "../../src/plugins/image/plugin";
import video from "../../src/plugins/video/plugin";


const muiTheme = getMuiTheme({
  fontFamily: "Roboto, sans-serif",
  tabs: {
    textColor: grey300,
    selectedTextColor: grey900
  },
  palette: {
    primary1Color: white,
    accent1Color: indigo500
  }
});

class Example extends React.Component {

  constructor(props) {
    super(props);
    const content = editorStateFromRaw(INITIAL_CONTENT);
    const content2 = editorStateFromRaw(INITIAL_CONTENT);
    this.keyBindings = [{
      name: "save",
      isKeyBound: (e) => {return e.keyCode === 83 && e.ctrlKey;},
      action: () => {this.onSave();}
    }];
    this.resetStyleNewLine = true;
    this.state = {
      value: content,
      value2: content2,
    };
    this.onChange = ::this.onChange;
    this.onChange2 = ::this.onChange2;
    this.onCodeActive = ::this.onCodeActive;
    this.maxSidebarButtons = null;
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(muiTheme)};
  }

  componentDidMount() {
    highlightCode(this);
  }

  onChange(value) {
    this.setState({
      value
    });
  }

  onChange2(value2) {
    this.setState({
      value2
    });
  }

  onSave() {
    console.log("save");
  }

  onCodeActive() {
    highlightCode(this);
  }

  renderEditor() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-between'
    };
    const columnStyle = {
      width: '40%'
    };
    return (
      <div className="tab-container-editor">
        <div style={containerStyle}>
          <div style={columnStyle}>
            <MegadraftEditor
              plugins={[image, video, relatedArticles]}
              editorState={this.state.value}
              placeholder="Text"
              onChange={this.onChange}
              resetStyleNewLine={this.resetStyleNewLine}
              maxSidebarButtons={this.maxSidebarButtons}/>
          </div>
          <div style={columnStyle}>
            <MegadraftEditor
              plugins={[image, video, relatedArticles]}
              editorState={this.state.value2}
              placeholder="Text 2"
              onChange={this.onChange2}
              resetStyleNewLine={this.resetStyleNewLine}
              maxSidebarButtons={this.maxSidebarButtons}/>
          </div>
        </div>
      </div>
    );
  }

  renderJsonPreview() {
    return (
      <div>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/styles/gruvbox-dark.min.css"/>
        <div className="tab-container-json">
          <pre className="jsonpreview">
            <code className="json hljs">
              {editorStateToJSON(this.state.value)}
            </code>
          </pre>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.activeContent) {
      return this.renderEditor();
    }
    return this.renderJsonPreview();
  }
}

/* global hljs */
hljs.initHighlightingOnLoad();

Example.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default Example;
