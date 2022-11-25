import React, {Component} from 'react';
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import TodoTable_component from './components/TodoTable_component';
import { PersistGate } from "redux-persist/integration/react";


class App extends Component {
  constructor(props) {
      super(props);
  }

  static get propTypes() {
      return {
          history: PropTypes.object.isRequired,
          store: PropTypes.object.isRequired,
      };
  }

  render() {
      return (
        <Provider store={this.props.store}>
            <PersistGate loading={null} persistor={this.props.persistor}>
                <React.Fragment>
                    <div className='wrapper'>
                        <div className='top-header'></div>
                        <div className='confort-wraper'>
                            <div className='page-header'>
                            <h1>To Do List</h1>
                            </div>
                            <TodoTable_component/>
                        </div>
                    </div>
                </React.Fragment>
            </PersistGate>
        </Provider>
      );
  }
}

export default (App);