import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import DetailsContainer from '../components/DetailsContainer';
import store from '../redux/Store';

it('Test DetailsContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <DetailsContainer />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
