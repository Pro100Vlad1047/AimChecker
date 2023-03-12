import s from "./Board.module.scss";
import {useState,useEffect} from 'react';
import Playground from '../../Components/Playground/Playground.jsx';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Board=()=>{
	
	const [timer,setTimer]=useState(45);
	const [size,setSize]=useState(30);
	const [toggle,setToggle]=useState(false);

	const navigate = useNavigate();

	useEffect(()=>{
		toggle ? navigate('playground', { state: { timer, size } }):console.log("");
		console.log(timer,size);
	},[size][timer]);

	const TimerSetting=(e)=>{
		setTimer(prev=>prev=Number(e.target.value));
	}

	const SizeSetting=(e)=>{
		setSize(prev=>prev=Number(e.target.value));
	}


	return(
		<div className={s.wrapper}>
			<div className={s.board}>
				<h1>Welcome to our AimBot site</h1>
				<div className={s.settings_block}>
					<p>Check your set up</p>
					<div className={s.setTime}>
						<div className={s.timeSetInput}>
							<p>Set timer:</p>
							<input onChange={TimerSetting} value={timer} id="timer" list="markers" type="range" min="30" max="90"/>
							<label htmlFor="timer">{timer}</label>
							<datalist id="markers">
							  <option value="45"></option>
							  <option value="60"></option>
							  <option value="75"></option>
							</datalist>
						</div>
						<div className={s.timeSetInput}>
							<p>Set size:</p>
							<input onChange={SizeSetting} id="size" value={size} list="markers_1" type="range" min="10" max="120"/>
							<label htmlFor="size">{size}</label>
							<datalist id="markers_1">
							  <option value="30"></option>
							  <option value="60"></option>
							  <option value="90"></option>
							  <option value="110"></option>
							</datalist>
						</div>
							<button onClick={()=>setToggle(prev=>prev=true)}>Start the game!</button>
					</div>
				</div>
			</div>
			{/*<Playground timer={timer} size={size} />*/}

		</div>
	)
}

export default Board;