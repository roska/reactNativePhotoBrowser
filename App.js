import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen'
import ImageScreen from './ImageScreen'

const Navigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Image: {screen: ImageScreen},

});

const App = createAppContainer(Navigator)

export default App;
