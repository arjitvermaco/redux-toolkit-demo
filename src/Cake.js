import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVanillaCake, buyChocoCake, buyPineAppleCake, buyVanillaCake } from './store/CakeSlice';

export default function Cake() {
 const cake = useSelector((state)=>state.cake)
 const dispatch = useDispatch();
  return (
    <div>
        <h3>Chocolate Cakes:{cake.chocoCake}</h3>
        <button onClick={()=>{dispatch(buyChocoCake())}}>Buy Choco Cake</button>
        <h3>Vanilla Cakes:{cake.vanillaCake}</h3>
        <button  onClick={()=>{dispatch(buyVanillaCake())}}>Buy Vanilla Cake</button>
        <button  onClick={()=>{dispatch(addVanillaCake(5))}}>Return Vanilla Cake</button>

        <h3>Pineapple Cakes:{cake.pineappleCake}</h3>
        <button  onClick={()=>{dispatch(buyPineAppleCake())}}>Buy Pineapple Cake</button>


    </div>
  )
}
