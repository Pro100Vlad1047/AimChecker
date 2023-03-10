import s from './App.module.scss';
import Playground from './Components/Playground/Playground.jsx';
import Board from './Components/Board/Board.jsx';
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
