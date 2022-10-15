import React from 'react'
import { Carousel, Image } from 'antd';

import './css/index.css'
import dycj from './img/cj.png'
import dytime from './img/time.png'
import dysjp from './img/sjp.png'
import dyjybj from './img/jybj.png'

export default function DyingLight() {
  return (
    <div className='dyinglight'>
      <h2>消逝的光芒</h2>
      <p>
        时长P1，成就P2，P3小金人，旗帜，信件全收集，P4收集隐藏结局时给的金色军用汽车配件
      </p>
      <p>
        我基本不玩恐怖游戏，这个是联机才玩的。风灵月影不能用了，不想（不敢）出去乱逛。我上游戏截个全收集的图就关了。
      </p>
      <p>
        玩这游戏，我只在白天出去。做跑酷成就的时候，只有库房那个夜间跑酷是我自己跑的。其他的用风灵月影过的，锁定时间，开启怪物定身。
      </p>
      <p>
        同生共死这个成就我一直无法完成，波扎克挑战最后打败队友就能获得，我打了好几次一直没给这个成就，去贴吧看很多人也遇到这个问题。
        剩下的就是新DLC的成就了，没继续玩。
      </p>
      <p>
        这游戏的彩蛋我找到过一些，有印象的是植物大战僵尸和一个水下洞穴（destiny1.0.2补丁）。
        天线区遇到2个科学家的那个山洞，有时候会看到一把悬浮的锤子。
      </p>
      <p>
        主线支线全打完，贫民窟的2个科学家坐飞机去了郊外（信徒），在信徒开火车冲隧道。信徒结局到水坝门口得知他俩穿过去了。
        当时我以为他俩开火车冲的那个隧道对面就是贫民窟。贫民窟天线区也有水坝。我以为信徒的水坝和天线区的是同一个。（长得太像了）
      </p>

      <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='photo'>
          <Image src={dytime} alt="" />
          <Image src={dycj} alt="" />
          <Image src={dysjp} alt="" />
          <Image src={dyjybj} alt="" />
        </Carousel>
      </Image.PreviewGroup>
    </div>
  )
}
