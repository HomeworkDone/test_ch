import React from 'react'
import { Carousel, Image } from 'antd';

import './css/index.css'
//ws
import wszf from './img/ws/wszf.png'
import jsmb from './img/ws/jsmb.png'
import pm from './img/ws/pm.png'
//z1
import ts from './img/z1/ts.png'
import z1wk from './img/z1/wk.png'
import z1 from './img/z1/z1.png'
//z2
import z2 from './img/z2/z2.png'
import dzjj from './img/z2/dzjj.png'
import nyd from './img/z2/nyd.png'
import wds from './img/z2/wds.png'
import z2wk from './img/z2/wk.png'
//z3
import z3 from './img/z3/z3.png'
import tjbg from './img/z3/tjbg.png'
import bhzs from './img/z3/bhzs.png'

export default function Zmxl() {
    return (
        <div className='zmxl'>
            <h2>目录</h2>
            <p>
                <a href="#zmws">造梦无双</a>
            </p>
            <p>
                <a href="#zm1">造梦西游1七魔王</a>
            </p>
            <p>
                <a href="#zm2">造梦西游2十殿阎罗</a>
            </p>
            <p>
                <a href="#zm3">造梦西游3大闹天庭</a>
            </p>
            <h2 id='zmws'>造梦无双</h2>
            <p>
                刚开始玩还是挺好玩的，时间就了变成天天做任务的模式了。打完就不想玩了，又不舍得脱坑。
            </p>
            <p>
                感觉大部分多人游戏都会这样。新内容更新不够快，玩家重复打副本乐趣减少，通过各类日常任务奖励道具保持日活。
            </p>
            <p>
                本区排29,P3万兽争锋刚开，趁没人速通了混个第3，刷新后实际排96（右下为真实排名）
            </p>
            <Image.PreviewGroup>
                <Carousel effect="fade" autoplay dotPosition='top' className='photo'>
                    <Image src={jsmb} alt="" />
                    <Image src={pm} alt="" />
                    <Image src={wszf} alt="" />
                </Carousel>
            </Image.PreviewGroup>

            <h2 id='zm1'>造梦西游1七魔王</h2>
            <Image.PreviewGroup>
                <Carousel effect="fade" autoplay dotPosition='top' className='photo'>
                    <Image src={ts} alt="" />
                    <Image src={z1wk} alt="" />
                    <Image src={z1} alt="" />
                </Carousel>
            </Image.PreviewGroup>

            <h2 id='zm2'>造梦西游2十殿阎罗</h2>

            <Image.PreviewGroup>
                <Carousel effect="fade" autoplay dotPosition='top' className='photo'>
                    <Image src={z2} alt="" />
                    <Image src={z2wk} alt="" />
                    <Image src={dzjj} alt="" />
                    <Image src={nyd} alt="" />
                    <Image src={wds} alt="" />
                </Carousel>
            </Image.PreviewGroup>

            <h2 id='zm3'>造梦西游3大闹天庭</h2>

            <Image.PreviewGroup>
                <Carousel effect="fade" autoplay dotPosition='top' className='photo'>
                    <Image src={z3} alt="" />
                    <Image src={tjbg} alt="" />
                    <Image src={bhzs} alt="" />
                </Carousel>
            </Image.PreviewGroup>

        </div>
    )
}
