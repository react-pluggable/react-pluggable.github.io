/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = (props) => (
      <div className="projectTitle" style={{ padding: "30px 0px" }}>
        <span style={{ fontSize: "40px" }}>
          A plugin system for JS & React apps
        </span>
        <small>Thinking Features over Components</small>
      </div>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow" style={{ paddingBottom: "30px" }}>
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl("introduction.html")}>
              <b>Get Started</b>
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const DiscordSection = (props) => (
      <div style={{ padding: "0 50px" }}>
        <a
          className="discordSection"
          href="https://discord.gg/6hSSRd5WzF"
          target="_blank"
        >
          <img
            width="65px"
            className="discord-icon"
            src="/img/discord-icon.png"
            alt="discord icon"
          />
          <h2
            style={{
              textAlign: "center",
              margin: "auto 10px",
              color: "black",
            }}
          >
            Join us on Discord!
          </h2>
        </a>
      </div>
    );

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: "center" }}
      >
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content:
              "The O in SOLID stands for Open-closed principle which means that entities should be __open for extension__ but __closed for modification__. With React Pluggable, we can add plugins and extend a system without modifying existing files and features.",
            title: "Open-closed Principle",
          },
          {
            content:
              "React is __inherently declarative__ which makes it intuitive for developers when building UI but it also __makes extensibility hard__.",
            title: "Imperative APIs for Extensibility",
          },
          {
            content:
              "React abstracts components very well but a feature may have more than just components. React Pluggable pushes you to a __feature mindset__ instead of a __component mindset__.",
            title: "Thinking Features over Components",
          },
        ]}
      </Block>
    );

    const Backlinks = (props) => (
      <div className="moreProjects">
        <h1 id="moreProjectsHeading">Related Projects</h1>
        <br></br>
        <div>
          <div className="backlink">
            <div>
              <h2>
                <span>
                  <a href="https://syncstate.github.io/" target="_blank">
                    <img src="/img/synchState-logo.png" width="25px"></img>
                    SyncState
                  </a>
                </span>
              </h2>
              <p>A state management library for React & JS apps</p>
            </div>
          </div>

          <div className="backlink">
            <div>
              <h2>
                <span>
                  <a href="https://nativebase.io/" target="_blank">
                    <img src="/img/native-base.jpeg" width="25px"></img>
                    NativeBase
                  </a>
                </span>
              </h2>
              <p>
                Essential cross-platform UI components for React Native & Vue
                Native.
              </p>
            </div>
          </div>
          <div className="backlink">
            <div>
              <h2>
                <span>
                  <a href="https://vue-native.io/" target="_blank">
                    <img src="/img/vuenative.png" width="25px"></img>
                    Vue Native
                  </a>
                </span>
              </h2>
              <p>
                Vue Native is a framework to build cross platform native mobile
                apps using JavaScript. It is a wrapper around the APIs of React
                Native.
              </p>
            </div>
          </div>
          <div className="backlink">
            <div>
              <h2>
                <span>
                  <a href="https://builderx.io/" target="_blank">
                    <img src="/img/builderx.png" width="25px"></img>
                    BuilderX
                  </a>
                </span>
              </h2>
              <p>
                BuilderX is a browser based design tool that codes React Native
                & React for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <DiscordSection />
          <Backlinks />
        </div>
      </div>
    );
  }
}

module.exports = Index;
