import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
    return {tmp_state:props.prop_value};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }
// render 함수가 return 되는 html형식의 코드를 화면에 그려준 후 실행된다
// 가장 마지막에 실행되는 함수 
  componentDidMount() {
    console.log('4. componentDidMount Call');
    console.log('5. tmp_state : '+this.state.tmp_state);
  }
  // props나 state가 바뀌면 호출되는 함수 render
  render() {
    console.log('3. render Call');
    return (
      <h2>[ THIS IS COMPONENTDIDMOUNT FUCNTION ]</h2>
    )
  }
}

export default R007_LifecycleEx;