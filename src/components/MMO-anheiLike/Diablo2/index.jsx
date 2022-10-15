import React from 'react'
import { Switch, Carousel } from 'antd';

import './css/index.css'
//佣兵
import ybwqmz from './img/yb/ybwqmz.png'
import ybwqxd from './img/yb/ybwqxd.png'
import ybtb from './img/yb/ybtb.png'
import ybyf from './img/yb/ybyf.png'
import skillmz1 from './img/yb/skillmz1.png'
import skillmz2 from './img/yb/skillmz2.png'
import skillmz3 from './img/yb/skillmz3.png'
import skillxd1 from './img/yb/skillxd1.png'
import skillxd2 from './img/yb/skillxd2.png'
import skillxd3 from './img/yb/skillxd3.png'

import MMmb1 from './img/yb/MMmb1.png'
import MMmb2 from './img/yb/MMmb2.png'
//人物
import ghwq from './img/rwmm/ghwq.png'
import rwMMdp from './img/rwmm/rwMMdp.png'
import rwMMg from './img/rwmm/rwMMg.png'
import rwMMj from './img/rwmm/rwMMj.png'
import rwMMjz1 from './img/rwmm/rwMMjz1.png'
import rwMMjz2 from './img/rwmm/rwMMjz2.png'
import rwMMst from './img/rwmm/rwMMst.png'
import rwMMtb from './img/rwmm/rwMMtb.png'
import rwMMxl from './img/rwmm/rwMMxl.png'
import rwMMxz from './img/rwmm/rwMMxz.png'
import rwMMyd from './img/rwmm/rwMMyd.png'
import rwMMyf from './img/rwmm/rwMMyf.png'
//动物园
import dwy1 from './img/dwy/dwy1.png'
import dwy2 from './img/dwy/dwy2.png'
import dwy3 from './img/dwy/dwy3.png'
import dwy4 from './img/dwy/dwy4.png'

//流程图  UT  施法档位
import d2loop from './img/d2loop.png'
import d2UT from './img/D2UT.png'
import FCRtable from './img/FCRtable.png'


export default function DyingLight() {
  let changeybtemp = true;
  const changeyb = () => {
    const changeybmzid = document.getElementById('ybsx_mz');
    const changeybxdid = document.getElementById('ybsx_xd');
    if (changeybtemp) {
      changeybmzid.style.display = 'none';
      changeybxdid.style.display = 'block';
    } else {
      changeybmzid.style.display = 'block';
      changeybxdid.style.display = 'none';
    }
    changeybtemp = !changeybtemp;
  }

  let mmtemp = true;
  const changemmmx = (e) => {
    const MMbackgroundImage = e.target.parentNode;
    const leftid = document.getElementById('rw_lefthand').getElementsByTagName('img')[0];
    const rightid = document.getElementById('rw_righthand').getElementsByTagName('img')[0];
    if (mmtemp) {
      MMbackgroundImage.style.backgroundImage = "url(" + MMmb2 + ")";
      leftid.src = rwMMj;
      rightid.src = rwMMdp;
    } else {
      MMbackgroundImage.style.backgroundImage = "url(" + MMmb1 + ")";
      leftid.src = rwMMg;
      rightid.src = '';
    }
    mmtemp = !mmtemp;
  }
  return (
    <div className='diablo2'>

      {/* <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt45749e0fed8aa592/blte16c19e66ae7e269/6025ffe15e4a6c4d10dea638/dark-wanderer-bg-lg.jpg" alt="" className='imgtop' /> */}

      <div className='xspy'>
        <div className='head'>
          <img src="https://d2rrvd0en0ymsb.cloudfront.net/original/1X/d492609ccc6f7e963f1908b7af566bd7fcbd0002.png" alt="" className='imglogo' />

          <h2>目录</h2>
          <p>
            <a href="#preface">前言</a>
          </p>
          <p>
            <a href="#situation">游戏现状</a>
          </p>
          <p>
            <a href="#analysis">一些游戏机制分析</a>
          </p>
          <p>
            <a href="#skill">特殊的玩法--UT</a>
          </p>
        </div>



        <h2 id='preface'>前言</h2>
        <p>
          小学接触的暗黑2，那时候不会玩，打到噩梦就打不过了。最近玩了重置版，死灵打到了地狱，85场景无压力。
          暗黑2，通关才是开始。我以前通关还是用SUSU打过的。两种版本，一个是75的，一个是95的。75的更厉害，有+7小符。
        </p>
        <p>
          暗黑2的极品黄蓝属于有生之年系列，词缀范围太多，概率太低。
          装备上，我感觉比暗黑3还要肝，但是玩的时候，可能不太会想去收集什么。
          毕竟是以前的作品，没有成就系统，仓库很小，我在玩的时候，并没有什么收集欲望，只想着通关。看看各个人物对话。
          反观暗黑3，太古满属性解决了强迫症。不同部位，词缀范围小，还可以洗一个词缀，收集难度相对小。
        </p>
        <p>
          单机游戏，可以修改存档，会了修改后，我还专门自己改了一套装备，词缀都是精挑细选的，避免满屏的属性条。
        </p>
        <img src="https://diablo3.nosdn.127.net/2/test/201601/13af.png" alt="" className='divide' />

        <h2 id='situation'>游戏现状</h2>
        <p>
          暗黑2虽然也是买断制，但是外挂的打击力度还是比暗黑3高的。（暗黑3国服封号一般是封几个月，解封还能继续玩）
          暗黑2有游戏内的市场，装备道具可以交易。不过暴雪目前没建立拍卖行。
        </p>
        <p>
          毕竟是20多年的游戏了，各职业的玩法已经被开发完全。基本都是老玩家，新人比较少。
          由于有战网赛季模式，玩家群体活跃。赛季初期，工作室规模未成形时。物价高，很多玩家加入进来打金，交易装备、符文。
        </p>
        <p>
          工作室成规模后，装备符文价格大幅下降，比如符文贝，赛季初600，赛季末只要15。
          没有官方拍卖行，但是玩家有需求，
          玩家群体自发建立了许多交易验证方式，拍卖群，闲鱼等。
          还好暗黑2支持玩家交易，不然一个大号符文，可能脸黑的玩家赛季结束都打不到。
        </p>
        <p>
          关于工作室，好处：降低道具价格，买方玩家能以相对低的成本获取所需道具。
        </p>
        <p>
          坏处：卖方玩家手中的道具价值降低，让官方损失了道具流通的收入。不过暗黑2没有这个问题，
          因为官方没有拍卖系统，没有道具收费。
        </p>
        <p>
          <img src={d2loop} alt="" className='img_mid' />
        </p>

        <img src="https://diablo3.nosdn.127.net/2/test/201601/13af.png" alt="" className='divide' />

        <h2 id='analysis'>一些游戏机制分析</h2>
        <p>
          <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt45749e0fed8aa592/blt55f5fe805acbed71/60144b8c3e8106106f1bc861/bullet-icon@2x.png" alt="" className='imgtb' />
          属性-----暗黑2装备的属性按 词缀编码+数值 的方式排列。如下，红框圈出的为词缀编码。9位二进制数，第一个词缀编码,000000000表示力量，
          力量的数值占8位，范围0-255，值为0时，对应的力量为-32，而不是0。其他3项，精力、敏捷、体力的数值占7位，0-127，127时，对应属性值为95。
          四条属性都拥有，且数值相同时，合并显示为1条属性，比如这个手套，+95所有属性。（倒数第4行）
        </p>
        <p>
          <img src={d2UT} alt="" className='img_mid' />
          <img src={rwMMst} alt="" />
        </p>
        <p>
          当设置的数值超过该词缀数值上限时，出现二进制加减法溢出。
          比如力量，数值位9位，最大值为 111,111,111 对应十进制为2^8 - 1 = 255，如果输入256，则变为0。
          即，在111,111,111的基础上，再+1，会发生进位（第10位+1，但是没有第10位，会丢弃），变为000,000,000。
        </p>

        <p>
          在下面的<a href="#skill">特殊的玩法--UT</a>章节中，伤害太高打不死怪，也是这个原因。
          伤害超过了最大生命上限，导致计算时出现二进制加减法溢出。怪物不掉血或掉了一部分血。
          正常情况下，没有这么高的伤害，只有修改才行。
        </p>

        <p>
          <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt45749e0fed8aa592/blt55f5fe805acbed71/60144b8c3e8106106f1bc861/bullet-icon@2x.png" alt="" className='imgtb' />
          帧数-----暗黑2中，1秒=25帧，表示，每秒播放25帧动画。人物的动作，比如攻击，执行帧数越少，速度越快。
          几个常见的受帧数影响的属性，攻速、施法速度、打击回复、格挡速度。
        </p>
        <p>
          攻速，人物完成一次攻击动作的速度。
        </p>
        <p>
          施法速度，人物完成一次施放法术的速度。
        </p>
        <p>
          打击回复，人物从僵直状态恢复到正常站立状态的速度。
          暗黑2中僵直指人物被攻击，减少的生命值超过一定数值的时候，会出现一段短暂的僵直状态（游戏内表现为 往后仰一下）
        </p>
        <p>
          格挡速度，人物完成一次格挡的速度。这个速度越快，人物就能越快结束格挡动作进行反击。
          同时，由于暗黑2有格挡延迟 Block-Delay 这样的设定。会出现人物攻击时也有格挡效果，但无格挡动作，不会打断玩家攻击。
          格挡延迟 指 格挡动画的冷却时间，进入格挡延迟之后，即使再次触发格挡效果，也不会触发格挡动画。
        </p>
        <p>
          基于这种底层的设计，暗黑2的攻速、施法速度、打击回复、格挡速度等属性，并不能真实的按照百分比提升。
          实际是按档位划分的。并且，不同职业 档位 和 帧数范围 也不同。
        </p>
        <p>
          如下，我做了一张施法速度档位表。以法师为例，104%FCR，不够105%，则和63%FCR效果相同，施法动作执行9帧。
          法师的闪电和连锁闪电单独划分一个档位，变相削弱电法。
        </p>
        <p>
          <img src={FCRtable} alt="" className='img_mid' />
        </p>
        <p>
          <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt45749e0fed8aa592/blt55f5fe805acbed71/60144b8c3e8106106f1bc861/bullet-icon@2x.png" alt="" className='imgtb' />
          免疫-----暗黑2有6种伤害类型，分别为 物理、魔法 及 冰、火、电、毒 四种元素伤。地狱难度，所有怪物都带有一种伤害免疫。
          这让不同职业的不同玩法有了限制。比如冰法很少去打冰洞等场景（怪物普遍冰免）。
          当抗性≥100，就会对类型伤害免疫。不会造成负数伤害，反向加血。一些装备或法师的冰冷专精 有减少敌人抗性词缀，但此效果面对免疫时无效。
        </p>
        <p>
          比如冰冷专精，可以在野蛮人佣兵进阶属性最后一行看到，敌人冰寒抗性-255%。只在计算时生效，不直接减少怪物自身抗性。
        </p>
        <p>举例，法师 5000冰伤，装备减冰抗25</p>
        <p>
          怪物A 50%冰抗，不免疫冰伤，减抗有效。理论上对怪物造成 5000 * （100% - （50% - 25%） ） = 3750 冰伤。
        </p>
        <p>
          怪物B 100冰抗，免疫冰伤，减抗无效。造成伤害0 。换个思路，理论上对怪物造成 5000*（100%*（100%-25%））=1250冰伤，但是怪物自身冰抗还是100，免疫冰伤，实际伤害为0。
        </p>
        <p>
          直接降低怪物自身抗性才能破除免疫，这在暗黑2中很稀有，死灵有3个技能，圣骑士1个技能。其他无。（重置版2.5版本PTR出了破免护身符，以后所有职业都能破免了。）
          <br /> #1伤害加深 可以-100物抗
          <br /> #2降低抵抗 可以-x元素抗性（x技能等级变化）
          <br /> #3衰老 可以-50物抗
          <br /> #4审判光环 可以减少周围怪物x元素抗性（x技能等级变化）
        </p>
        <p>
          这四个技能是直接对怪物生效的，因此可以破除免疫。但是，对于抗性超过100%的敌人，仅有1/5的效果。
        </p>
        <p>
          例如，怪物闪电抗性为110%，被12级审判（-85%抗性）减抗后，抗性降低至93%，而不是25%。
        </p>

        <img src="https://diablo3.nosdn.127.net/2/test/201601/13af.png" alt="" className='divide' />

        <h2 id='skill'>特殊的玩法--UT</h2>
        <p>
          UT是一个暗黑2的编辑器，接触UT之后，我对暗黑2的认识更多了，从最开始无脑堆属性，到有针对性的选择搭配，也遇到了暗黑2的一些BUG，专注光环BUG，三闪BUG，宝珠BUG等。
          UT随便改改，PVE里就可以秒天秒地了。我转而开始研究暗黑2各职业的技能，改一些有意思的装备。
        </p>
        <p>
          <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt45749e0fed8aa592/blt55f5fe805acbed71/60144b8c3e8106106f1bc861/bullet-icon@2x.png" alt="" className='imgtb' />
          如下，给第五幕佣兵野蛮人和第一幕佣兵侠盗的装备（词缀组合已避开上面提到的3种bug）。
          <br />
          （鼠标移上去可查看装备和技能属性）
        </p>
        <p>
          衣服带有各职业被动技能，对佣兵也有效，但目前版本，正常途径下佣兵无法获取某些技能。比如法师的冰火电专精，那可是终极被动技能。
        </p>

        <Switch
          checkedChildren="侠盗"
          unCheckedChildren="野蛮人"
          className='ybBtn'
          onChange={changeyb}
        />
        <div id='ybsx_mz'>
          <div id='ybtb'>
            <img src={ybtb} alt="" className='' />
          </div>
          <div id='ybwq'>
            <img src={ybwqmz} alt="" className='' />
          </div>
          <div id='ybyf'>
            <img src={ybyf} alt="" className='' />
          </div>
          <div id='skillmz1' className='skill'>
            <img src={skillmz1} alt="" className='' />
          </div>
          <div id='skillmz2' className='skill'>
            <img src={skillmz2} alt="" className='' />
          </div>
          <div id='skillmz3' className='skill'>
            <img src={skillmz3} alt="" className='' />
          </div>
        </div>

        <div id='ybsx_xd'>
          <div id='ybtb'>
            <img src={ybtb} alt="" className='' />
          </div>
          <div id='ybwq'>
            <img src={ybwqxd} alt="" className='' />
          </div>
          <div id='ybyf'>
            <img src={ybyf} alt="" className='' />
          </div>
          <div id='skillxd1' className='skill'>
            <img src={skillxd1} alt="" className='' />
          </div>
          <div id='skillxd2' className='skill'>
            <img src={skillxd2} alt="" className='' />
          </div>
          <div id='skillxd3' className='skill'>
            <img src={skillxd3} alt="" className='' />
          </div>
        </div>

        <p>
          <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt45749e0fed8aa592/blt55f5fe805acbed71/60144b8c3e8106106f1bc861/bullet-icon@2x.png" alt="" className='imgtb' />
          如下，人物装备 （点击武器栏的 I 和 II 可切换主副手查看对应武器及面板属性）
          <br />
          衣服带了各职业的被动技能，野蛮人的防御，移速，武器专精。法师的冰电火专精，回蓝。死灵的召唤类被动，亚马逊的攻击类被动
          <br />
          弓的伤害调低了，且只加min（最小伤害），加max可达1500K，伤害超过怪物生命上限，会出现击中怪物，不掉血或只掉一部分。
          <br />
          副手的剑盾带了攻击灵气，都不需要亲自动手了，自动清场。
        </p>

        <div className='mmmb'>
          <div className='ghwq1' onClick={changemmmx}></div>
          <div className='ghwq2' onClick={changemmmx}></div>
          <img src={ghwq} alt="" id='changewq' />

          <div id='rw_lefthand'>
            <img src={rwMMg} alt="" />
          </div>
          <div id='rw_righthand'>
            <img src='' alt="" />
          </div>
          <div id='rw_tb'>
            <img src={rwMMtb} alt="" />
          </div>
          <div id='rw_st'>
            <img src={rwMMst} alt="" />
          </div>
          <div id='rw_xz'>
            <img src={rwMMxz} alt="" />
          </div>
          <div id='rw_yf'>
            <img src={rwMMyf} alt="" />
          </div>
          <div id='rw_xl'>
            <img src={rwMMxl} alt="" />
          </div>
          <div id='rw_yd'>
            <img src={rwMMyd} alt="" />
          </div>
          <div id='rw_jz1'>
            <img src={rwMMjz1} alt="" />
          </div>
          <div id='rw_jz2'>
            <img src={rwMMjz2} alt="" />
          </div>
        </div>

        <p>
          <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt45749e0fed8aa592/blt55f5fe805acbed71/60144b8c3e8106106f1bc861/bullet-icon@2x.png" alt="" className='imgtb' />
          腰带加了各职业的召唤技能,共11种召唤物，动物园模式完全体（除死灵的重生，重生还能再来99个召唤物，太卡不加了）
        </p>
        <p>
          暗黑2召唤物图标最多显示8个，熊、藤蔓、影子大师未显示（红圈标出）。
        </p>
        <p>
          带上这么多小弟，就没那么暗黑了，很有安全感。
        </p>

        <Carousel effect="fade" autoplay dotPosition='top' >
          <p>
            <img src={dwy1} alt="" />
          </p>
          <p>
            <img src={dwy2} alt="" />
          </p>
          <p>
            <img src={dwy3} alt="" />
          </p>
          <p>
            <img src={dwy4} alt="" />
          </p>
        </Carousel>
      </div>

    </div >

  )
}
