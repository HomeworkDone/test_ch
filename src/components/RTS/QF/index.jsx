import React from 'react';
import { Carousel, Image } from 'antd';

import './css/index.css'

import error1 from './img/error/error1.png'
import error2 from './img/error/error2.png'
import error3 from './img/error/error3.png'

import cd from './img/xg/cd.png'
import zb1 from './img/xg/zb1.png'
import zb2 from './img/xg/zb2.png'
import zb3 from './img/xg/zb3.png'
import fs10 from './img/xg/fs10.png'
import wm from './img/xg/wm.png'
import wtq from './img/xg/wtq.png'

import yjfs_zy1 from './img/yjfs/yjfs_zy1.png'
import yjfs_zy2 from './img/yjfs/yjfs_zy2.png'
import yjfs_zy3 from './img/yjfs/yjfs_zy3.png'
import yjfs_zy4 from './img/yjfs/yjfs_zy4.png'
import yjfs_zy5 from './img/yjfs/yjfs_zy5.png'
import yjfs_da1 from './img/yjfs/yjfs_da1.png'



export default function QF() {
  return (
    <div className='QF'>
      <div className='head'>
        <h2>目录 起凡</h2>
        <p>
          <a href="#achievement">闲言碎语</a>
        </p>
        <p>
          <a href="#xiugai">娱乐修改</a>
        </p>
        <p>
          <a href="#yjfs">永久分身bug</a>
        </p>
      </div>

      <h2 id='achievement'>闲言碎语</h2>

      <p>
        一张自定义RPG，就像是讲一个故事。
      </p>
      <p>
        War3和起凡，我更喜欢起凡的画风。三国人物造型。非常可惜，起凡取消了玩家原创板块。不过还是能玩到，只能单机了，没有服务器。
      </p>
      <p>
        起凡自己的群雄逐鹿、三国争霸，我玩的比较少，不爱玩。
        我基本只玩原创，比较有名的地图，真三国乱舞。玩了好多好多遍，也发现了起凡的一些不足。
      </p>
      <p>
        比如人物属性上限的问题，玩家的属性超过一定数值，游戏就会弹窗崩溃。
      </p>
      <p>
        原因是起凡的进程内有一个函数，lua_Getint，该函数接收的参数最大值为101657792，一旦超过就会报错。
      </p>
      <p>
        <img src={error2} alt="" />
        <img src={error3} alt="" />
        <Image src={error1} alt="" className='e1' />
      </p>

      <h2 id='xiugai'>娱乐修改</h2>
      <p>
        给自己改一身敌方单位的装备，比如敌方单位才有的重生十字章。高顺--真·陷阵,张辽--真·问天枪，这俩武器设定太bug了。
      </p>
      <p>
        改敌方单位的技能，物免，分身。改无CD
      </p>
      <p>
        <img src={wm} alt="" />
        <img src={fs10} alt="" />
      </p>
      <p>
        另外，真·问天枪的机制，无上限叠加伤害，这个累计攻击次数是独立存储的，和英雄无关，如果添加到英雄上，那每个英雄都有这个属性，浪费资源。
        设定上只有敌方单位-张辽才有，所以就单独存储了这个数据。
      </p>
      <p>
        经过修改拿到这把武器，就会出现一个问题，只要有该武器的英雄，共享次数。
        A叠加100次，B再叠加10次，A和B都被计算为叠加了110次。因为都会读取那个独立的变量。
      </p>
      <p>
        如P4，给张角改了真·问天枪，张角第一次攻击就能打出17100的叠加伤。这个叠加伤是我的角色在基地打大树叠上去的。
        P5改无CD。横线部分锁定为0，就能实现对应技能无CD。
      </p>

      <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='yjfs'>
          <Image src={zb1} alt="" />
          <Image src={zb2} alt="" />
          <Image src={zb3} alt="" />
          <Image src={wtq} alt="" />
          <Image src={cd} alt="" />
        </Carousel>
      </Image.PreviewGroup>
      <h2 id='yjfs'>永久分身bug</h2>
      <p>
        在角色阵亡的瞬间释放分身技能，分身会与角色一同复活。这些分身就变成永久的了，能释放技能，无法使用道具。
        如P2、P3
      </p>
      <p>
        P4，带一群永久分身守家。这个还是让角色死了复活在家里才带回来的，之前带重生卡的带不回来，地图有格挡。
      </p>
      <p>
        除非换个有位移的，比如邓艾。卡了多好永久分身，刚带回基地，开了几个小弟的分身技能，结果游戏崩溃了。P5
      </p>
      <p>
        P6给赵云改了邓艾的位移技能，全部带回去守家。
      </p>

      <Image.PreviewGroup>
        <Carousel effect="fade" autoplay dotPosition='top' className='yjfs'>
          <Image src={yjfs_zy1} alt="" />
          <Image src={yjfs_zy2} alt="" />
          <Image src={yjfs_zy3} alt="" />
          <Image src={yjfs_zy4} alt="" />
          <Image src={yjfs_da1} alt="" />
          <Image src={yjfs_zy5} alt="" />
        </Carousel>
      </Image.PreviewGroup>
      <p>
        <br />
      </p>
    </div>
  )
}