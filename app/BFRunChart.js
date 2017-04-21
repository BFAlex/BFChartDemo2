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

export default class BFRunChart extends Component {

    render() {

        const option = {
            title: {
                text: 'Beijing AQI'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: [100, 200]
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '2014-06-01'
            }, {
                type: 'inside'
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: 0,
                    lte: 50,
                    color: '#096'
                }, {
                    gt: 50,
                    lte: 100,
                    color: '#ffde33'
                }, {
                    gt: 100,
                    lte: 150,
                    color: '#ff9933'
                }, {
                    gt: 150,
                    lte: 200,
                    color: '#cc0033'
                }, {
                    gt: 200,
                    lte: 300,
                    color: '#660099'
                }, {
                    gt: 300,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: {
                name: 'Beijing AQI',
                type: 'line',
                data: [10, 20],
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 50
                    }, {
                        yAxis: 100
                    }, {
                        yAxis: 150
                    }, {
                        yAxis: 200
                    }, {
                        yAxis: 300
                    }]
                }
            }
        };

        return (
            <View style={Styles.runBaseContainer}>
                <Text>
                    跑步图表
                </Text>
                <Echarts option={option} width={300} height={300} />
            </View>
        );
    }
}