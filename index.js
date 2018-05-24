import React from 'react';
import {View, Text} from 'react-native';
import * as _ from 'lodash';

export default class CountdownTimer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: props.from
    }

    this.decrementCounter = this.decrementCounter.bind(this);
  }

  decrementCounter() {
    this.setState(prevState => ({
      counter: prevState.counter - 1 < 0 ? 0 : prevState.counter - 1
    }))
  }

  componentDidMount() {
    const interval = setInterval(this.decrementCounter, 1000);

    this.setState({
      interval: interval
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (<View>
      <Text>{_.padStart(this.state.counter, 2, "0")}</Text>
      </View>)
  }
}
