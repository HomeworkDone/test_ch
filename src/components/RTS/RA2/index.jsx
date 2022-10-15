import React from 'react'
import { Carousel, Image } from 'antd';

import './css/index.css'

import map_afe from './img/map/map_afe.png'
import map_slsj from './img/map/map_slsj.png'
import map_xkd from './img/map/map_xkd.jpg'
import map_zlw from './img/map/map_zlw.png'

import bjq from './img/bjq/bjq.png'
import rules from './img/bjq/rules.png'
import jdld from './img/bjq/jdld.png'
import dtjdld from './img/bjq/dtjdld.png'

import kj1 from './img/kj1.png'
import kj2 from './img/kj2.png'
import kj3 from './img/kj3.png'
import jg1 from './img/jg1.png'
import jg2 from './img/jg2.png'
import jg3 from './img/jg3.png'

import red2logo from './img/red2logo.png'

export default function Red2() {
  return (
    <div className='Red2'>
      <div className='head'>
        <img src={red2logo} alt="" />
        <h2>目录</h2>
        <p>
          <a href="#xiugai">娱乐修改</a>
        </p>
        <p>
          <a href="#achievement">自制地图</a>
        </p>
      </div >

      <h2 id='xiugai'>娱乐修改</h2>

      <p>
        红警2修改，可以直接用编辑器改地图、改rulesmd。
      </p>
      <p>
        <img src={bjq} alt="" />
      </p>
      <p>
        <img src={rules} alt="" />
      </p>
      <p>
        比如设置触发，开局自带全阵营建筑
      </p>

      <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='kj'>
          <Image src={kj1} alt="" />
          <Image src={kj2} alt="" />
          <Image src={kj3} alt="" />
        </Carousel>
      </Image.PreviewGroup>
      <p>
        基地自带雷达，可以从rulesmd改，也可以改地图文件，改地图更好一些，每张地图自定义，不与其他地图冲突。
      </p>
      <p>
        <img src={jdld} alt="" />
        <img src={dtjdld} alt="" />
      </p>
      <p>
        改AI，让AI进攻更强一些。
      </p>
      <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='kj'>
          <Image src={jg1} alt="" />
          <Image src={jg2} alt="" />
          <Image src={jg3} alt="" />
        </Carousel>
      </Image.PreviewGroup>

      <h2 id='achievement'>自制地图</h2>

      <p>
        P1、P2在原地图基础上加了触发，娱乐人机，开机自带所有建筑。
      </p>
      <p>
        P3小块地是我照着平台做了个差不多的，地面换了城市草地（不会留下弹坑）平衡了下资源，原版中间的位置太难打了。
      </p>
      <p>
        P4是把原地图改成了城市草地，因为换了场景类型，每一块地面都要重新贴图，累死。
      </p>
      <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='map'>
          <Image src={map_afe} alt="" />
          <Image src={map_slsj} alt="" />
          <Image src={map_xkd} alt="" />
          <Image src={map_zlw} alt="" />
        </Carousel>
      </Image.PreviewGroup>
      <p>
        <br />
      </p>




    </div >
  )
}