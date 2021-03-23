import React from 'react';

import {StatusBar, InteractionManager} from 'react-native';

import {ThemeProvider} from 'react-native-elements';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './src/Redux/store';

import AppNavigator from './src/Routes';

import 'react-native-gesture-handler';

import {colors} from './src/utils/scaling';

import themeRNE from './src/utils/themes/defaultRNE';

import './src/utils/themes/defaultFontIcon';


class App extends React.Component {

  componentDidMount(): void {
    InteractionManager.setDeadline(1000);
  }

  render () {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor} >
            <ThemeProvider theme={themeRNE} >
              <StatusBar backgroundColor={colors.indigo}/>
              <AppNavigator/>
            </ThemeProvider>
          </PersistGate>
        </Provider>
    );
  }
}

export default App;
