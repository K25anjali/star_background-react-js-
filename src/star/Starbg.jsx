import {useState} from 'react'
import './Starbg.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

const Starbg = () => {
    const [light, setLight] = useState(false)
    const [stars, setStars] = useState([])

    const setStyle={
        backgroundColor: light ? 'rgb(214,214,133)' : 'black'
    }

    const updateLight=()=>{
      setLight(!light)
    }

    const generateRandomPosition=()=>{
    const maxwidth=window.innerWidth-100;
    const maxheight=window.innerHeight-100;
    const x = Math.random()*maxwidth;
    const y = Math.random()*maxheight;
    return{x,y}
    }
  const addStar=()=>{
setStars([...stars,generateRandomPosition()])
console.log('stars',stars);
    }
   
  return (
    <>
      <div className="container">
      <div className="light" style={setStyle}></div>
<button className='btn' onClick={updateLight}>Hello</button>
{stars.map((star,index)=>
<div key={index} className={`star ${light?'glow':''}`} style={{left:star.x, top:star.y}}>
  <FontAwesomeIcon icon={faStar} />
</div>)}
<button onClick={addStar} className='btn'>Add Star</button>
</div>
    </>
  )
}

export default Starbg
