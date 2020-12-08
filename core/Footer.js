/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("introduction.html")}>Getting Started</a>
            <a href={this.docUrl("hello-world-example.html")}>Examples</a>
            <a href={this.docUrl("dependencies.html")}>Core Concepts</a>
            <a href={this.docUrl("api-ref.html")}>API References</a>
            <a href={this.docUrl("faq.html")}>FAQ</a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://twitter.com/react_pluggable?utm_source=react-pluggable"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            <a
              href="https://stackoverflow.com/questions/tagged/react-pluggable?utm_source=react-pluggable"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stackoverflow
            </a>
            <a
              href="https://discord.gg/6hSSRd5WzF"
              target="_blank"
              rel="noreferrer noopener"
            >
              Discord
            </a>
          </div>
          <div>
            <h5>More</h5>

            <a
              href="https://github.com/GeekyAnts/react-pluggable"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://github.com/GeekyAnts/react-pluggable/blob/master/CONTRIBUTING.md"
              target="_blank"
            >
              Contribution Guidelines
              <br />
              <br />
            </a>
            <a
              className="github-button"
              href="https://github.com/GeekyAnts/react-pluggable"
              data-icon="octicon-star"
              data-count-href="https://github.com/GeekyAnts/react-pluggable"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {/* {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )} */}
          </div>
          <div>
            <a
              href="https://geekyants.com?utm_source=react-pluggable&utm_medium=Footer&utm_campaign=react-pluggable"
              target="_blank"
              rel="noreferrer noopener"
            >
              Built with <span style={{ color: "red" }}>&#9829;</span> at
              GeekyAnts
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
