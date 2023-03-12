import s from './App.module.scss';
import Router from './Components/Router/Router.jsx';

function Container() {
  return (
    <div className={s.App}>
      {/*<Board/>*/}
      {/*<Playground/>*/}
      <Router/>
    </div>
  );
}

export default Container;
