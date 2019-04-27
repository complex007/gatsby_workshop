import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
// import "./index.css";
// import s from './color.module.scss';
import d from './index.module.scss';


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={d.layout}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div>header yuqi {config.siteDescription}</div>
        {children}
      </div>
    );
  }
}
