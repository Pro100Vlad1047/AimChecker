import { Route, Routes } from "react-router-dom";
import Playground from "../../Components/Playground/Playground";
import Board from "../../Components/Board/Board";



const Router = () => {
    return (
        <Routes>
            <Route index element={<Board />} />
            <Route path={`playground`} element={<Playground />} />
        </Routes>
    );
};

export default Router;