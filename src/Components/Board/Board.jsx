import s from "./Board.module.scss";
import {useState,useEffect} from 'react';
import Playground from '../../Components/Playground/Playground.jsx';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Board=()=>{
	
	const [timer,setTimer]=useState(30);
	const [size,setSize]=useState(30);
	const [toggle,setToggle]=useState(false);

	const navigate = useNavigate();

	useEffect(()=>{
		toggle ? navigate('playground', { state: { timer, size } }):console.log("");
		console.log(timer,size);
	},[size][timer]);


	return(
		<div className={s.wrapper}>
			<div className={s.board}>
				<h1>Welcome to our AimChecker site</h1>
				<div className={s.settings_block}>
					<p>Check your set up</p>
					<div className={s.setTime}>
						<div className={s.timeSetInput}>
							<p>Set timer:</p>
							<input name="range" id='timer' type="radio"/>
							<label onClick={()=>{setTimer(prev=>prev=30)}} htmlFor='timer'>30s</label>
							<input name="range" id='timer_2' type="radio"/>
							<label onClick={()=>{setTimer(prev=>prev=60)}} htmlFor='timer_2'>60s</label>
							<input name="range" id='timer_3' type="radio"/>
							<label onClick={()=>{setTimer(prev=>prev=90)}} htmlFor='timer_3'>90s</label>
						</div>
						<div className={s.timeSetInput}>
							<p>Set size:</p>
							<input name="size" id='size' type="radio"/>
							<label onClick={()=>{setSize(prev=>prev=30)}} htmlFor='size'>30px</label>
							<input name="size" id='size_1' type="radio"/>
							<label onClick={()=>{setSize(prev=>prev=40)}} htmlFor='size_1'>40px</label>
							<input name="size" id='size_2' type="radio"/>
							<label onClick={()=>{setSize(prev=>prev=50)}} htmlFor='size_2'>50px</label>
							<input name="size" id='size_3' type="radio"/>
							<label onClick={()=>{setSize(prev=>prev=80)}} htmlFor='size_3'>80px</label>
						</div>
							<button onMouseDown={()=>setToggle(prev=>prev=true)}>Start the game!</button>
					</div>
				</div>
			</div>
			{/*<Playground timer={timer} size={size} />*/}

		</div>
	)
}

export default Board;