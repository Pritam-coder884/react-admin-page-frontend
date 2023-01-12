import React from 'react'
import "./Revenue.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Revenue = () => {
  return (
    <div className='revenue'>
      <div className='revenue-top'>
        <span>Total Revenue</span>
        <MoreVertIcon className='icon'/>
      </div>
      <br/>
      <div className='revenue-center'>
        <CircularProgressbar value={70} text={"70%"} strokeWidth={5}  className='revenue-cirular-bar' />
        <p>Total sales made today</p>
        <p className='counter'>$420</p>
        <p className='revenue-center-text'>Previous transaction processing.Last payment may not be included</p>
      </div>
      <br/>
      <div className='revenue-bottom'>
        <div className='box'>
          <div>Target</div>
          <div className='item negative'>
            <KeyboardArrowDownIcon />
            <p>$12.4k</p>
          </div>
        </div>
        <div className='box'>
          <div>Last week</div>
          <div className='item positive'>
          <KeyboardArrowUpIcon />
          <p>$12.4k</p>
          </div>
        </div>
        <div className='box'>
          <div>Last month</div>
          <div className='item negative'>
          <KeyboardArrowDownIcon />
          <p>$12.4k</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Revenue