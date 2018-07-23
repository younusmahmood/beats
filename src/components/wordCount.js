import React, { Component } from "react";
import { uniqWith, isEqual, words } from "lodash";

import { grammarWords } from '../helpers/omitWords'

export default class WordCount extends Component {
  handleChange = () => {
    const data = [];
    const text = this.refs.text.value
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") //eslint-disable-line
      .replace(/[0..9]/g, "");
    const textArray = words(text);

    textArray.map(word => {
      if (word.length > 2 && !!!grammarWords.find(o => o === word)) {
        let count = 0;
        for (let i = 0; i < textArray.length; i++) {
          if (word === textArray[i]) {
            count += 1;
          }
        }
        return data.push({ text: word, value: count * 20 });
      }
      return null;
    });

    data.sort((a, b) => b.value - a.value);
    this.props.submitData(uniqWith(data, isEqual));
  };

  render() {
    return <textarea className="form-control" ref="text" onChange={this.handleChange} placeholder="Paste any text or job descriptions for top keywords to add to your resume and beat ATS!" />
  }
}