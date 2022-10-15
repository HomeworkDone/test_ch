import React from 'react';
import { Carousel, Image } from 'antd';

import './css/index.css'

import zy from './img/zy.png'

import bd from './img/bd.png'
import egt from './img/egt.png'
import gh from './img/gh.png'
import jzsx from './img/jzsx.png'
import qbgh from './img/qbgh.png'
import tree_reborn from './img/tree_reborn.png'



export default function War3() {
    return (
      <div className='War3'>
        <div className='head'>
          <h2>目录 魔兽</h2>
          <p>
            <a href="#achievement">战役</a>
          </p>
          <p>
            <a href="#xiugai">编辑器</a>
          </p>
        </div>

        <h2 id='achievement'>战役</h2>
        <p>
          翻了翻以前的存档，找到一个兽族战役的记录。装备全收集，隐藏关全探索。暗夜精灵的有个影子之球，要找10个碎片。
        </p>
        <p>
          <img src={zy} alt="" />
        </p>
        <h2 id='xiugai'>编辑器</h2>
        <p>
          魔兽的编辑器我用的不多，改图做了个树木再生的触发，做了件带所有光环的装备。
          装备只能选1个技能，所以要选魔法书，给这个魔法书添加多个技能，然后触发里禁用该魔法书
        </p>
        <p>
          <img src={tree_reborn} alt="" />
        </p>
        <p>
          <img src={egt} alt="" />
        </p>

        <p>
          载入游戏测试
        </p>
        <p>
          <img src={qbgh} alt="" />
        </p>
        <p>
          可以给建筑回血回蓝
        </p>
        <p>
          <img src={jzsx} alt="" />
        </p>

        <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='gh'>
          <Image src={gh} alt="" />
          <Image src={bd} alt="" />
        </Carousel>
      </Image.PreviewGroup>
  
      </div>
    )
  }