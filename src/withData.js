import React, { Component } from 'react';

const withData = WrappedComponent => {
  class WithData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      const { sourceData } = this.props;
      fetch(sourceData)
        .then(res => res.json())
        .then(data => this.setState({ data: data.slice(0, 5) }));
    }

    render() {
      const { ...otherProps } = this.props;
      const { data } = this.state;

      return data.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        <WrappedComponent data={data} {...otherProps} />
      );
    }
  }

  return WithData;
};

export default withData;
