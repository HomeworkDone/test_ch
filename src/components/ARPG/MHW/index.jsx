import React from 'react'
import { Carousel, Image } from 'antd';

import './css/index.css'

import logo_title from './img/logo_title.png'
import mhwcj from './img/cj.png'
import mhwtime from './img/time.png'
import fj1 from './img/fj1.png'
import mm from './img/mm.png'
import plk from './img/plk.png'
import xg from './img/xg.png'
import xgdjd from './img/xgdjd.png'
import ce from './img/ce.png'
//船长速通灭尽龙
import mjl1 from './img/mjl/mjl1.png'
import mjl2 from './img/mjl/mjl2.png'
import mjl3 from './img/mjl/mjl3.png'
import mjl4 from './img/mjl/mjl4.png'
import mjl5 from './img/mjl/mjl5.png'

export default function MHW() {
  return (
    <div className='MHW'>
      <div className='head'>
        <img src={logo_title} alt="" className='mid' />
        <h2>目录</h2>
        <p>
          <a href="#achievement">成就/时长</a>
        </p>
        <p>
          <a href="#xiugai">娱乐修改</a>
        </p>
        <p>
          <a href="#captain">船长速通历战王灭尽龙</a>
        </p>
      </div>
      <h2 id='achievement'>成就/时长</h2>
      <p>
        我玩怪猎，大部分都是乱转，钓鱼，抓小动物，看风景。本体全成就，冰原没玩。
      </p>
      <p>
        虽然本体通关了，但是我什么武器都不会用，输出方式是火药桶，用它一路炸过去。（具体玩法请看修改部分）
      </p>
      <p>
        给猫换了套亚索的装扮。
      </p>
      <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='achi'>
          <Image src={mhwcj} alt="" />
          <Image src={mhwtime} alt="" />
          <Image src={fj1} alt="" />
          <Image src={mm} alt="" />
        </Carousel>
      </Image.PreviewGroup>

      <h2 id='xiugai'>娱乐修改</h2>
      <p>ce，改单机游戏，一定有它的身影！</p>
      <p>
        <img src={ce} alt="" />
      </p>
      <p>
        改道具数量，改装备等级，补给充足，防御高，可以放心的看风景，慢慢放桶炸龙。
      </p>
      <p>
        怪猎修改联机也能用，不会发生数据不同步而掉线。起凡的联机模式不同步就掉线。盲猜，怪猎改了本机数据，会推送给其他房内队友进行同步。
        而起凡则是，房主作为主机，其他队友数据以房主电脑的数据为准，一旦不一样就掉线。
      </p>
      <p>
        我自己配了一套辅助装备，所有部位全镶嵌3个宝珠，各类抗性尽量满，自己吃药还能奶队友！
      </p>
      <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='achi'>
          <Image src={xgdjd} alt="" />
          <Image src={xg} alt="" />
          <Image src={plk} alt="" />
        </Carousel>
      </Image.PreviewGroup>
      <p>
        火药桶最多放2个，但是可以把自己放的数量锁定为0或1，就可以一直放桶了。
      </p>
      <p>
        不能放太多，第一次打绚辉龙的时候，想试试能不能炸死。我放太多桶了，每个桶的爆炸都单独加载一次画面，结果游戏崩溃了。
      </p>
      <h2 id='captain'>船长速通历战王灭尽龙</h2>
      <p>
        穿上隐身衣，默默摆桶，拔刀引爆，白光闪过，直接送走。
      </p>
      <p>
        57个刚好炸死。前面好多次70+桶直接把游戏炸崩溃了。
        图里最快是2分47秒，还能更快的，开局直接送到龙边上，放完最后一个桶时，灭尽龙刚好走到桶区，立刻引爆直接结束。
      </p>
      <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='czst'>
          <Image src={mjl1} alt="" />
          <Image src={mjl2} alt="" />
          <Image src={mjl3} alt="" />
          <Image src={mjl4} alt="" />
          <Image src={mjl5} alt="" />
        </Carousel>
      </Image.PreviewGroup>
    </div>
  )
}
