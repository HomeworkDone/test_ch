import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu, BackTop } from 'antd';
import React, { } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom'

import routes from '../../routes'


function getItem(label, key, icon, children, type, onClick) {
  return {
    label,
    key,
    icon,
    children,
    type,
    onClick,
  };
}

const TopMenu = () => {

  const element = useRoutes(routes);
  const navigata = useNavigate();
  const showData = (data) => {
    return () => {
      //console.log(window.location.pathname);  当前地址栏，判断是否回到顶部
      if (window.location.pathname !== data) {
        window.scrollTo(0, 0);
      }
      navigata(data);
    }
  }

  const items = [
    getItem('首页', 'sub0', null, null, 'MenuItemType', showData('/homepage')),
    getItem('动作角色扮演', 'sub1', <DesktopOutlined />, [
      getItem('怪物猎人世界', '1', null, null, 'MenuItemType', showData('/mhw')),
      getItem('消逝的光芒', '2', null, null, 'MenuItemType', showData('/dyinglight')),
    ]),
    getItem('MMO/暗黑', 'sub2', <ContainerOutlined />, [
      getItem('暗黑2', '3', null, null, 'MenuItemType', showData('/diablo2')),
      getItem('暗黑3', '4', null, null, 'MenuItemType', showData('/diablo3')),
      getItem('征途怀旧', '5', null, null, 'MenuItemType', showData('/zthj')),
    ]),
    getItem('即时战略', 'sub3', <AppstoreOutlined />, [
      getItem('红警2/尤里的复仇', '6', null, null, 'MenuItemType', showData('/red2')),
      getItem('魔兽争霸3', '7', null, null, 'MenuItemType', showData('/war3')),
      getItem('起凡', '8', null, null, 'MenuItemType', showData('/7f')),
    ]),
    getItem('小游戏', 'sub4', <PieChartOutlined />, [
      getItem('造梦系列', '9', null, null, 'MenuItemType', showData('/zmxl'))
    ]),
  ];


  return (
    <div className='container'>
      <Menu
        defaultSelectedKeys={['sub0']}
        defaultOpenKeys={['sub0']}
        mode="horizontal"
        items={items}
        className='topmenu'
      />
      <BackTop>
        <div style={{
          height: 60,
          width: 60,
          lineHeight: '60px',
          borderRadius: 30,
          backgroundColor: '#1088e9',
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
        }} >
          TOP
        </div>
      </BackTop>

      <div id='rightdata'>
        {element}
      </div>
    </div>
  );
};

export default TopMenu;