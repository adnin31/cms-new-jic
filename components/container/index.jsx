import styles from '../../styles/Container.module.css'
import dashboardMenus from '../../pages/menu.js'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'

const { Header, Sider } = Layout

const Container = (props) => {
  const { id, children, className } = props
  const router = useRouter()

  return (
    <div id={id} className={`${styles.container} ${className || ''}`}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <h1 className={styles.title}>PROTO CMS</h1>
        </Header>
        <Layout className={styles.sider}>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                dashboardMenus.map(menu => (
                  <Menu.Item key={menu.title} icon={menu.icon} title={menu.title} onClick={() => router.push(`/${menu.title.toLowerCase()}`)}>{menu.title}</Menu.Item>
                ))
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {children}
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default Container
