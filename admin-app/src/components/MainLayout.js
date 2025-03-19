import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  MdOutlineSpaceDashboard,
  MdOutlineShoppingCart,
  MdOutlineCategory,
} from "react-icons/md";
import { AiOutlineCustomerService, AiOutlineBgColors } from "react-icons/ai";
import { TbBrandProducthunt, TbBrandSafari } from "react-icons/tb";
import { GrCatalog } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { RiBloggerLine } from "react-icons/ri";
import { TbBrandAzure } from "react-icons/tb";
import { ImBlog } from "react-icons/im";
import { IoIosColorWand, IoIosListBox } from "react-icons/io";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <MdOutlineSpaceDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineCustomerService className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <GrCatalog className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <MdOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <TbBrandProducthunt className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <TbBrandAzure className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "brand-list",
                  icon: <TbBrandSafari className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategory className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <MdOutlineCategory className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <IoIosColorWand className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <IoIosListBox className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <RiBloggerLine className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <RiBloggerLine className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <RiBloggerLine className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <IoIosListBox className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
