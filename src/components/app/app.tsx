import Main from '../../pages/main/main';
import Header from '../header';
type MainPageProps = {
  rentCount: number;
}

function App({ rentCount }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Main rentCount={rentCount} />
    </div>);
}
export default App;
