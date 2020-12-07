import React, { Component } from 'react'
import Carousel from './Carousel'
import ProductsList from './ProductsList'

export default class Main extends Component {
    render() {
        return (
            <div className="col-lg-6">
            <Carousel/>
            <ProductsList/>
            </div>
        )
    }
}
