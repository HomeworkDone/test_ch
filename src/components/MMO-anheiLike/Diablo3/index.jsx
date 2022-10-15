import React from 'react';

import './css/index.css'

import pic_all from './img/all.png'
import pic_sj from './img/sj.png'
import pic_DHtime from './img/DHtime.png'
import pic_SJJtime from './img/SJJtime.png'
import pic_WStime from './img/WStime.png'
import pic_150pg from './img/150pg.png'
import pic_jiani from './img/jiani.png'
import pic_analy from './img/analy.png'
import pic_paiming from './img/paiming.png'
import pic_pz from './img/pz.png'

export default function Diablo3() {
  return (
    <div className='diablo3'>

      <div className='head'>
        <img src="https://diablo3.nosdn.127.net/1/header/logo.png" alt="" />
        <h2>目录</h2>
        <p>
          <a href="#preface">前言</a>
        </p>
        <p>
          <a href="#achievement">成就与经历</a>
        </p>
        <p>
          <a href="#analysis">游戏现状分析</a>
        </p>
        <p>
          <a href="#si_skill">国服赛季旅程小技巧</a>
        </p>
      </div>

      <img src="https://diablo3.nosdn.127.net/2/test/201601/13af.png" alt="" className='divide' />

      <h2 id='preface'>前言</h2>

      <p>暗黑3是买断制游戏。有限的道具收费也只是国服卖的翅膀、宠物等装饰和白金币。
        如果是体验剧情，玩玩各流派，没什么肝度。
        如果追求完美的装备，高等级，肝度非常高。
        暗黑3没有日常任务，脱坑再回坑，拉开的差距无非是巅峰等级，材料。又是PVE，对于游戏体验，影响有限。
        又有赛季模式，每个赛季都是从零开始。因此新玩家和回坑玩家不存在跟不上版本的问题。
      </p>
      <p>
        17年末开始玩暗黑3，断断续续玩到现在，除了20赛季，其他赛季全参与，
        主玩的职业3个，猎魔人，圣教军和武僧。
      </p>
      <p>
        <img src={pic_DHtime} alt="" className='img_ti' />
        <img src={pic_SJJtime} alt="" className='img_ti' />
        <img src={pic_WStime} alt="" className='img_ti' />
      </p>

      <p>
        不得不说，暗黑3是一个很精致的游戏，背景故事详尽，各人物，部分NPC，甚至一些装备，都有对应的剧情联系。
        游戏本身优化也很好，较低的配置也有不错的画质。
        暗黑3的随机场景非常强大，不同场景都有很多的随机地图模块组合，几乎碰不到一模一样的地图。
      </p>
      <p>
        每个职业都有很多组合，但大部分玩家都去玩主流bd，伤害高，冲层高。
        比如在12-16赛季，DH的匕首，刀扇和佳妮，全是拿佳妮三刀流，基本没有拿刀扇的，伤害太低，刀扇更像是一把玩具。(不是装备本身，是整套build，太古刀扇我都分解了，没图了)
      </p>
      <p><img src={pic_jiani} alt="" className='img_mid' /></p>
      <p>天梯榜的存在，也方便抄作业。不过，在12-16赛季，天梯榜也没多少人带150宝石，很多都是140+宝石就去打150了，通关时间大多是14分X秒。(15分钟以内才算通关)
        这时候的暗黑3，升宝石很麻烦，必须要组队打134以上，一般都是134，就靠那1%成功率点宝石。
        这时候的各职业冲层各有上限，比如法师单人140+，DH单人130+。我当时只能打110。再往上就要赌图了。(随机到buff好，怪密集的图。)
      </p>
      <p>现在暗黑3的各职业强度加强了许多，所有职业都能单刷150了。25赛季，我用神龙火幻身武僧通了150层，还顺便刷了一些150宝石。</p>
      <p><img src={pic_150pg} alt="" className='img_mid' /></p>


      <img src="https://diablo3.nosdn.127.net/2/test/201601/13af.png" alt="" className='divide' />
      <h2 id='achievement'>成就与经历</h2>
      <p>
        <img src={pic_all} alt="" className='img_all' />
        <img src={pic_sj} alt="" className='img_sj' />
      </p>


      <img src="https://diablo3.nosdn.127.net/2/test/201601/13af.png" alt="" className='divide' />
      <h2 id='analysis'>游戏现状分析</h2>
      <p>
        现在暗黑3，大部分都是机器人，很多玩家自己开挂挂机。
        从我自己的体验来看，暗黑3国服有如下的闭环。</p>
      <p><img src={pic_analy} alt="" className='img_mid' /></p>
      <p>官方打击外挂这块，我特意换了一种颜色，因为打击力度不是很高，
        这挂不仅活的好好的，还因为国服销量很好，推出了中文版，并专门在香港开设了服务器，解决了国内玩家使用外挂时延迟过高的问题。
        由于买断制，暗黑3后续运营，暴雪无法取得收益，且暗黑3基本不支持道具交易，(唯一可以交易装备的情况是，多人组队爆出的装备，仅在2小时内可以交易)
        而外挂也只能帮助玩家积累材料，经验，装备，无法影响游戏内的市场(其实也没有市场，因为没有道具流通)
      </p>
      <p>
        因此打击力度不高也是可以理解的。
      </p>
      <p>
        工作室自己的号不需要太多，因为一部分玩家会找工作室代挂，工作室就可以用代挂玩家的号去跑悬赏，给买悬赏的玩家交付。
      </p>
      <p>
        但工作室代挂，都是虚拟机多开代挂，游戏运行很卡，效率不高，一部分挂机玩家追求高效率挂机，就会选择自己买挂，配装，挂机。
        因为挂的购买与使用还稍微有点门槛，还产生了专门帮买挂，改配置的商家。
      </p>
      <p>
        社交方面，主要有4个交流途径，贴吧、凯恩之角、maxroll、QQ群。
        凯恩我很少看，贴吧一般是玩家晒晒自己出的装备，
        QQ群经常讨论的是挂机相关的，大家晒晒自己的巅峰，怎么刷效率高，看看全服排名之类的。
      </p>
      <p><img src={pic_paiming} alt="" className='img_paiming' /></p>
      <p>
        maxroll，海外最大的暗黑论坛。我是看配装的，这个论坛的配装很全面，且界面尽可能的还原游戏本体。就是访问太慢。
        关于论坛，我没遇到过国内游戏由玩家群体搭建这种平台，一般是官方搭建，或者直接贴吧交流。
      </p>
      <p><img src={pic_pz} alt="" className='' /></p>
      <h2 id='si_skill'>国服赛季旅程小技巧</h2>
      <p>
        开局选DH或者武僧，公共混到70，（也可以直接某宝带70）某宝买悬赏，血岩赌一套套装，推荐DH冰吞/多重，武僧尹娜。刷赛季旅程，结束。
      </p>


    </div>
  )
}
