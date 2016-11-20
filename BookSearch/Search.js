'use strict';

import React, { Component } from 'react';
import SearchBooks from './SearchBooks';
import {
    StyleSheet,
    NavigatorIOS
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Search Books',
                    component: SearchBooks
                }}
            />
        );
    }
}

module.exports = Search;
