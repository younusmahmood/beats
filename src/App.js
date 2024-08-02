import React, { Component } from "react";
import WordCloud from "react-d3-cloud";
import "./App.css";
import WordCount from "./components/wordCount";

const fontSizeMapper = word => Math.log2(word.value) * 5;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  handleDataChange = data => {
    let newData = data;
    this.setState({
      data: newData.slice(0, 50)
    });
  };

  render() {
    return (
      <div className="container App">
        <row>
          <div className="col-md-6 offset-md-3 textarea" align="center">
            <h1 className="header">
              be<span className="ats">ATS</span>
            </h1>
            <small class="text-muted">(Beat Applicant Tracking Software)</small>
            <p style={{ backgroundColor: "#0f172a", padding: 10, borderRadius: 10, color: "white" }}>
              Looking for a comprehensive resume solution? Try <a href="https://www.resumaidpro.io" target="_blank">ResumaidPro</a> for a seamless end-to-end resume writing experience.
              Click <a href="https://www.resumaidpro.io" target="_blank">here</a> to learn more! Use promo code <strong>BEATS10</strong> to get 10% off!
            </p>

            <WordCount submitData={this.handleDataChange} />
          </div>
        </row>
        <row>
          <div className="col-md-8 offset-md-2" align="center">
            <WordCloud
              data={this.state.data}
              fontSizeMapper={fontSizeMapper}
              width={500}
              height={400}
            />
            <p className="disclaimer">
              <em>
                Disclaimer: This tool does not guarantee an interview, but
                combined with the right experience and skills, having the right
                keywords on your resume helps! Good luck!
              </em>
            </p>
          </div>
        </row>
      </div>
    );
  }
}

export default App;
