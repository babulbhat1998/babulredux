import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';
const Shop = () => {
    const dispatch = useDispatch();
    const bal = useSelector(state => state.amount);
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className=''>
        <h2>Deposit / Withdarw Money</h2>
        {/* <button className='btn btn-danger btn-sm' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button> */}
        <button className='btn btn-danger btn-sm mx-3' onClick={()=>{withdrawMoney(100)}}>-</button>
        <span>Update Balance <b>${bal}</b></span>
        <button className='btn btn-success btn-sm mx-3' onClick={()=>{depositMoney(100)}}>+</button>
        {/* <button className='btn btn-success btn-sm' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
    </div>
  )
}

export default Shop