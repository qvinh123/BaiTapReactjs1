import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductsList extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-lg-4 my-4">
                <ProductItem/>
            </div>
            <div className="col-lg-4 my-4">
            <ProductItem/>
            </div>
            <div className="col-lg-4 my-4">
            <ProductItem/>
            </div>
            <div className="col-lg-4">
                <ProductItem/>
            </div>
            <div className="col-lg-4">
            <ProductItem/>
            </div>
            <div className="col-lg-4">
            <ProductItem/>
            </div>
            </div>
        )
    }
}
