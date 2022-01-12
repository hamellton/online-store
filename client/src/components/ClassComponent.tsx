import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor({ test }: { test: string }) {
        super({ test })
        this.state = test
    }
    componentDidMount(): void {
        console.log('test string for class component');
    }
    render() {
        return (
            <div>
                <h1>Test Class component</h1>
                <div>{this.state}</div>
                <div id='test'>div with id 'test'</div>
            </div>
        )
    }
}
