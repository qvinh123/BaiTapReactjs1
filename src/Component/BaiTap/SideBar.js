import React, { Component } from 'react'
import "./styles.css";
export default class SideBar extends Component {
    render() {
        return (
                <div className="col-lg-3 sideBar">
                    <h2>Shop name</h2>
                    <ul>
                        <li><a href="https://google.com">Category 1</a></li>
                        <li><a href="https://google.com">Category 2</a></li>
                        <li><a href="https://google.com">Category 3</a></li>
                    </ul>
                </div>
        )
    }
}
