import React from 'react'

import './css/index.css'

import gtatime from './img/gtatime.png'
import gtaachi from './img/gtaachi.png'

export default function HomePage() {
  return (
    <div className='homepage'>

      <h2>目录</h2>
      <p>
        <a href="#preface">前言</a>
      </p>
      <p>
        <a href="#GTA">GTA系列</a>
      </p>
      <p>
        <a href="#dhhsd">大航海时代4</a>
      </p>
      <h2 id='preface'>前言</h2> 
      <p>
        我玩的游戏，分为两类，MMO和故事类。MMO感觉核心在社交。通过社交、沉没成本、数值膨胀（挖坑）等方式吸引玩家一直玩下去。
        故事类的游戏，看看剧情，体验新的玩法，打通几次后就不太会去重复玩了。有一款特别精致的，神界原罪2。一直没通关（强迫症，总想打完全部可能的剧情才去下一关，不断S/L）
      </p>
      <p>
        我玩单机游戏会尝试修改，玩一些非常规的玩法，看看游戏内的变化。卡bug、加mod、改数据。
      </p>
      <p>
        还有几个小游戏，剧情很棒，上古神器2/3（硅谷游戏），金庸群侠传2/3（半瓶神仙醋），魔域2.0-2.4（飞翔）。我小时候打了好多次，全剧情全道具收集（强迫症）
      </p>
      <p>
        后来会用了CE和帧数修改后，还尝试了一些娱乐玩法。金庸群侠传2，无门派学会全武功、道具全收集（正常情况下不行，很多场景要2选1的）。
      </p>
      <p>
        感觉现在的游戏会越来越专业化，只做某一个方向，如果要做一个大而全的游戏，很容易造成，什么都有，但每样都不够好玩。
      </p>
      <p>
        简述一下我对这9个游戏的游玩经历。还有2个没有单列出来，GTA系列和大航海时代4，在最后会简单谈谈。
        受限于Win10兼容、存档丢失等问题，没什么截图，就不单独开一个模块了。
      </p>
      <p>
        怪猎，消逝的光芒。我玩的时候，感觉像在看一部电影，读一个故事。
        玩的时候，没有很强的目的性，就只是玩，看这里面有什么。而不是我要达成什么目标，以特定方式去玩。
      </p>
      <p>
        怪猎，画面友好（指不恐怖），我每次玩消光玩害怕了就去玩怪猎缓解一下。
        我的操作不好，所以那些打击感对我吸引小一些，我更多是在看风景。
      </p>
      <p>
        消逝的光芒，入侵玩的少，基本都是玩单机，看完故事，达成全收集后，我就不怎么玩了。如果要玩 随机事件，有更好的选择---GTA。
      </p>
      <p>
        暗黑2，玩了好多年，偶尔还会玩玩，自己改一些装备，改技能搭配，重置版召唤流死灵打到地狱，没去打都瑞尔，主要想卡bug杀，装备本身足够过地狱了，毕竟是死灵，一根腰带就能通地狱的职业。
      </p>
      <p>
        暗黑3，4000小时，现在只打赛季。旅者罗盘出了太古就不怎么打了。
      </p>
      <p>
        征途怀旧，玩了十多年，现在也在玩，现在没落了，但还是有潜力的，可以像DNF、梦幻那样，只是缺少一次彻底的改变。
      </p>
      <p>
        红警2/尤里的复仇，我对战玩的不厉害，更多的是自己做地图，改触发，改AI。
      </p>
      <p>
        魔兽争霸3/起凡，这两个我是玩自定义地图的。魔兽的自定义地图的营收还是很好的，起凡可惜了，把玩家原创删掉了。相比之下我更喜欢玩起凡的自定义，魔兽画风不太习惯。
        魔兽我自己做过一些娱乐地图。
      </p>
      <p>
        造梦系列，十年的铺垫，吸引了大批情怀玩家，目前的无双我正在玩，本区排名20+。乐趣少了，更像是按时打卡。
      </p>
      <h2 id='GTA'>GTA系列</h2>
      <p>
        GTA系列，我玩的很长，仅steam上GTA5就有400小时，
        GTA 我通关了VC、SA、GTA5的主线、支线，可收集道具全满。
      </p>
      <p>
        它吸引我的地方在 随机性，主线清完了，开车开飞机四处转，总能遇到各个随机事件，
        开车把某个地方围住，看NPC如何变化。
        <br />
        有些任务，场景是实时演算的，我故意在一些地方放炸弹，或者堵住出入口。
        或者让NPC过不去、或者走我布置的路线。
      </p>
      <p>
        <img src={gtatime} alt="" />
      </p>
      <p>
        <img src={gtaachi} alt="" />
      </p>
      <p>
        VC和SA玩的比GTA5要都多的多，这两个，我当时才初一，那时候都是去3DM、贴吧下盗版玩。主线内容打完了，
        我就开车到处跑，加一些mod，改改游戏设定，比如车的参数。
        <br /><br />
        印象比较深的任务。
      </p>
      <p>
        VC的小飞机炸大楼，最初用修改器，锁时间打过。通关后，经常重新玩，手动也很轻松的通过了。
        <br /><br />
        电影厂小岛支线，开水上飞机投放广告。
        水上飞机太难控制，第一次过是通过改人物所处坐标过的。
      </p>
      <p>
        SA的终局，跑不过汤普尼的消防车，我便尝试一些盘外招。把CJ的车,速度上限改到400，还是跑不过。
        <br />
        又去调cleo，在必经之路上放一些墙，挡住这条路。结果消防车直接穿过去了
        <br />
        经过一系列“非法”操作后，我发现 此消防车 无敌且可以穿墙，与主角车辆的相对速度会保持在一个固定范围内。
        以保证跑在主角前面。
        <br />
        只要主角追上，速度会提高，直到超越主角一段距离。
        于是，我撤销了所有改动，只让自己的车保持视线内能看到消防车就行，反复尝试后通关了。
      </p>
      <p>
        GTA5玩到末日豪劫，此后更新的佩里科岛之类的没有继续玩。抢劫任务强制组队，各有分工，
        如果开黑玩还是很好玩的，以前经常bug打末日2，双开自己单刷。
      </p>

      <h2 id='dhhsd'>大航海时代4</h2>
      <p>
        玩这个游戏，更像是读一个故事。
        <br />
        我没有全收集通关，我总是想尽可能完美的过关，但是这游戏有一些恶性bug一直没修复，2021年上架steam也没修复。
        某些主角不能在某条件下访问特定npc，不然存档会坏。这导致必须放弃一些任务或资源，我就不想做任务了。
        转而去玩经商，攻打城市，打击敌对势力。
        虽然也做主线，但不追求全收集了。
      </p>
      <p>
        讲一下 经商 里面的一个设定吧。
        <br />
        我在玩经商的时候，不同城市商品种类和价格不同，按月度变化，向该城市卖某商品太多。会降价，也会导致其他商品降价。
        买某些特产商品太多，会短暂涨价。
        <br />
        并且里面的人机也在经商，玩家和人机会互相影响。
      </p>


    </div>
  )
}
