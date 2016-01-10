import React from 'react';
import MessageList from './MessageList.jsx';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Colors from 'material-ui/lib/styles/colors';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import AppBar from 'material-ui/lib/app-bar';

class App extends React.Component {
  constructor() {
    super();
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  }

  render() {
    return (
      <div>
        <AppBar title="Lovely Chat App" />
        <MessageList />
      </div>
    );
  }
}

export default App;
