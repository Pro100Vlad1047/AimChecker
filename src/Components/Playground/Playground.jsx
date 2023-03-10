import s from "./Playground.module.scss";
import {useState,useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Playground=(timer)=>{

	const {state}=useLocation();
	console.log(state);

	const ttime=state.timer;
	const size=state.size;

	const [onTop,setOnTop]=useState(((Math.random() * 95) + 2).toFixed(3));
	const [onLeft,setOnLeft]=useState(((Math.random() * 95) + 2).toFixed(3));
	const [count,setCount]=useState(0);
	const [time,setTime]=useState(ttime);
	const [timeToggle,setTimeToggle]=useState(false);


	const Update=()=>{
		setOnTop(prev=>prev=((Math.random() * 95) + 2).toFixed(3));
		setOnLeft(prev=>prev=((Math.random() * 95) + 2).toFixed(3));
		console.log(onTop);
		console.log(onLeft);
		setCount(prev=>prev+1);
		setTimeToggle(prev=>prev=true);
	}


	useEffect(()=>{
		const timeInterval = setInterval(()=>{
			timeToggle &&
			setTime(prev=>prev>= 1 ? prev-1 : 0);
		},1000);	
		return ()=>clearInterval(timeInterval);
	},[timeToggle]);
	

	function RemoveTimer(){
		setTime(time=>time=ttime);
		setTimeToggle(prev=>prev=false);
		setCount(0);
	}


	const posStyle={
		left:`${onLeft}`+"%",
		top:`${onTop}`+"%",
		width:`${size}`+"px",
		height:`${size}`+"px",
	}

	return(
		<div className={s.wrapper}>
			{time!==0?
				(<div onClick={Update} style={posStyle} className={s.dot}></div>):
				(<div className={s.finish}>Congratulations!!! <p>Your attempt result is: {count}</p><p>Tap (remove timer) to play again!</p></div>)
			}
			<div className={s.score}>Score: {count}</div>
			<div className={s.timer}>Time:{time}s</div>
			{time!==0?
				(<div className={s.background_score}>{count}</div>):
				(<div></div>)
			}
			<Link to={"/"}>
				<div onClick={RemoveTimer} className={s.toggleTimer}>Remove timer</div>
			</Link>
		</div>
	)
}

export default Playground;