import React, { Component } from 'react'
import Footer from './Footer';
import Header from "./Header";
import Section from './Section';

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
            <Header/>
            <Section/>
            <Footer/>
            </div>
        )
    }
}
