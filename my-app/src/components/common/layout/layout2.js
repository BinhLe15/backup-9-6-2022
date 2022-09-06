import React from "react";
import { Layout } from "antd";

import "antd/dist/antd.css";
import AppHeader from "../header";
import AppSider from "../sider.js";
import AppFooter from "../footer";
import AppFeature2 from "../../feature/feature2";
const { Header, Sider, Content, Footer } = Layout;

function LayOut_QLNTG() {
  return (
    <Layout>
      <Header className="header">
        <AppHeader />
      </Header>
      <Layout
        style={{
          paddingTop: "64px",
        }}
      >
        <Sider width={275} className="site-layout-background">
          <AppSider />
        </Sider>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
          <AppFeature2 />
          </Content>
          
          <Footer>
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default LayOut_QLNTG;
