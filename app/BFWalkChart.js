/**
 * Created by Readboy_BFAlex on 2017/4/21.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import Styles from './style/Styles';
import Echarts from 'native-echarts';

export default class BFSportChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sportData: [30, 10, 50, 40, 60, 25, 50],
            date: ['04/21', '04/21', '04/21', '04/21', '04/21', '04/21', '04/21'],
        };
    }

    render() {

        const option = {
            // 触发类型
            tooltip: {
                trigger: 'axis',
            },

            // 直角坐标系 grid 中的 x 轴
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.state.date,
            },

            // 直角坐标系 grid 中的 y 轴
            yAxis:
                {
                    type: 'value',
                    // splitNumber: 5,
                    // minInterval: 20,
                },

            // 视觉映射组件
            visualMap: {
                show: false,
            },

            color:['rgb(249,159,94)'],

            // 列表
            series: [
                {
                    name: '计步',
                    type: 'line',
                    data: this.state.sportData,
                    areaStyle: {normal: {}},
                    // markPoint: {
                    //     data: [
                    //         {type: 'max', name: '最大值'},
                    //         {type: 'min', name: '最小值'},
                    //     ]
                    // },
                    // markLine: {
                    //     data: [
                    //         {type: 'average', name: '平均值'}
                    //     ]
                    // },
                },
            ]
        };

        const option0 = {
            title: {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                show: false,
                data:['最高气温','最低气温']
            },
            toolbox: {
                show: false,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [
                {
                    name:'最高气温',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },

            ]
        };

        return (
            <View style={Styles.walkBaseContainer}>
                <Text>
                    计步图表
                </Text>
                <Echarts option={option} width={this.props.width} height={this.props.height} />
            </View>
        );
    }
}