/**
 * Created by Readboy_BFAlex on 2017/4/20.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');
// import BFSportChart from './BFSportChart';
import BFWalkChart from './BFWalkChart';
import BFRunChart from './BFRunChart';


export default class BFChartDemo extends Component {

    render() {

        return (
            <View style={dStyles.baseContainer}>
                <Text style={dStyles.titleContainer}>
                    这个组件用于展示自定义图表的用法
                </Text>
                <View style={dStyles.chartContainer}>
                    <BFWalkChart width={width} height={300} />
                </View>
                <View style={dStyles.chartContainer}>
                    <BFRunChart/>
                </View>
            </View>
        );
    }
}

const dStyles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        backgroundColor: '#f0ffff',
        alignItems: 'center',
    },

    titleContainer: {
        padding: 5,
        marginTop: 22,
    },

    chartContainer: {
        width: width,
        height: 300,
        marginTop: 20,
        padding: 5,
    },
});