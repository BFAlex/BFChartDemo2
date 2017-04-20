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
import BFSportChart from './BFSportChart';

export default class BFChartDemo extends Component {

    render() {

        return (
            <View style={Styles.baseContainer}>
                <Text style={Styles.titleContainer}>
                    这个组件用于展示自定义图表的用法
                </Text>
                <View style={Styles.chartContainer}>
                    <BFSportChart/>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
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
        height: 360,
        marginTop: 20,
        padding: 5,
    },
});